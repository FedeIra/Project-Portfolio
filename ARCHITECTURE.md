# ARCHITECTURE DECISIONS & LEADERSHIP PATTERNS

Este documento detalla decisiones arquitectónicas clave y patrones de liderazgo técnico aplicados en el proyecto.

---

## 1. AUTENTICACIÓN STATELESS CON JWT + PASSPORT

### Decisión
Implementar JWT como token de autenticación en lugar de sesiones server-side.

### Justificación de Negocio
- **Escalabilidad horizontal**: Cualquier servidor puede validar tokens sin compartir estado
- **Móvil-friendly**: Compatible con apps nativas que no manejan cookies
- **Preparado para microservicios**: Tokens pueden ser consumidos por múltiples servicios

### Patrones Implementados
- **Token refresh automático**: Frontend detecta expiración y llama refresh endpoint sin interrumpir UX
- **Multi-estrategia**: Passport.js permite agregar OAuth, Google Sign-In sin refactor
- **Bcrypt con rounds variables**: Hash de contraseñas resiliente a evolución de poder computacional

### Impacto
Plataforma preparada para crecer de 1 servidor a N servidores sin cambios en lógica de autenticación.

---

## 2. SEPARACIÓN DE CAPAS: ROUTES → SERVICES → VALIDATIONS

### Estructura
```
routes/comments.routes.js
  ↓ (delega validación)
schemasValidation/comment.schema.js (Joi)
  ↓ (delega negocio)
services/comments/commentsService.js
  ↓ (delega persistencia)
db/schemas/comment.js (Mongoose)
```

### Beneficios
- **Testabilidad**: Cada capa puede mockearse independientemente
- **Reusabilidad**: Services pueden ser llamados desde múltiples rutas
- **Mantenibilidad**: Cambios en reglas de negocio no afectan rutas

### Ejemplo Real
Si necesitamos que un comentario expire después de 30 días, el cambio está en `commentsService.js` (una línea en una función), no disperso en rutas.

---

## 3. GESTIÓN DE ARCHIVOS DELEGADA A AWS S3

### Problema Original
Almacenar certificados en servidor local:
- Consume espacio en disco (no escalable)
- Requiere backups manuales
- Dificulta replicación multi-datacenter

### Solución Implementada
AWS S3 con integridad auditada:
- Metadatos extraídos (tamaño, fecha, versionado)
- Signed URLs para descargas temporales (seguridad sin exponer bucket)
- Compatible con CDN global (future-proof)

### Impacto
Aplicación puede crecer a millones de certificados sin cambios de infraestructura.

---

## 4. STATE MANAGEMENT CENTRALIZADO CON REDUX + PERSIST

### Decisión
Redux como fuente única de verdad en frontend, con persistencia automática.

### Patrones Implementados

#### Redux Persist
```
App reloaded
  ↓
Redux Persist rehydrates store
  ↓
Token validation middleware
  ↓
UX continúa desde donde se dejó
```

#### Redux Thunk para Async
Operaciones HTTP no bloquean UI:
- User sube certificado → Redux Thunk dispara action asincrónica
- UI muestra loading state inmediatamente (optimistic)
- Al completarse, reducer actualiza estado

### Beneficio
Eliminadas race conditions clásicas: "¿Qué pasa si el usuario cierra la pestaña a mitad de upload?"

---

## 5. VALIDACIÓN EN CAPAS (INPUT → SCHEMA → NEGOCIO)

### Arquitectura de Validación

**Input HTTP** → Joi Schema → Reglas de Negocio → Persistencia

Ejemplo: Crear comentario
```javascript
// Joi valida que username no esté vacío
// Service valida que username existe en DB
// Service valida que no haya spam (5 comentarios en 5 min)
// Mongoose valida esquema antes de INSERT
```

### Beneficio
Errores capturados lo más pronto posible, con mensajes específicos:
- "Username is required" (input)
- "User not found" (negocio)
- "Spam detected" (regla de negocio)

---

## 6. ERROR HANDLING ESTRUCTURADO CON BOOM

### Problema
Errores dispersos en aplicación → respuestas inconsistentes al cliente

### Solución
Middleware centralizado que mapea cualquier error a estructura estándar:

```javascript
{
  statusCode: 400,
  error: "Bad Request",
  message: "\"username\" is required"
}
```

Beneficios:
- Frontend sabe qué códigos HTTP esperar
- Logging consistente en todos los errores
- Debugging facilitado (rastreo de errors)

---

## 7. THEMING CENTRALIZADO EN FRONTEND

### Decisión
Un único archivo (`chakraTheme.js`) define colores, tipografía, espaciado.

### Impacto Empresarial
Cambio de identidad corporativa:
- ❌ Recorrer 50 componentes buscando colores hardcodeados
- ✅ Actualizar `chakraTheme.js` → sistema entero refleja cambio

### Escalabilidad
Soporte futuro para:
- Modo dark/light con 1 switch
- Temas por cliente/tenant
- Cambios A/B sin deploy

---

## 8. CONTAINERIZACIÓN CON DOCKER

### Beneficio Principal
**Dev-Prod Parity**: Lo que funciona en laptop del dev funciona en producción.

### Patrones Implementados

#### Multi-stage builds (eficiencia)
```dockerfile
# Stage 1: Build
FROM node:18 as builder
RUN npm install && npm run build

# Stage 2: Runtime (imagen más pequeña)
FROM node:18-alpine
COPY --from=builder /app/dist /app
```

#### Versionado de Imágenes
```bash
docker build -t portfolio-api:v1.0.0 .
```
Reproducibilidad: versión exacta desplegada en producción.

---

## 9. SEPARACIÓN BACKEND/FRONTEND EN CARPETAS

### Decisión
Monorepo con dos aplicaciones independientes:
```
/api      → Node.js/Express (puerto 3001)
/client   → React (puerto 3000)
```

### Justificación
- Equipos pueden evolucionar independientemente
- Frontend no necesita versión específica de Node
- Deploy selectivo: actualizar solo API sin tocar frontend

### Future-proof
Fácil reemplazar `client` con Next.js, Vue, o mobile app sin tocar `api`.

---

## 10. COMUNICACIÓN ASINCRÓNICA CON EMAIL.JS

### Patrón Implementado
```
User envía contacto
  ↓
Controller recibe request
  ↓
Service dispara async email (no espera respuesta)
  ↓
User recibe respuesta 200 inmediatamente
  ↓
Email se envía en background
```

### Beneficio
Falla el servidor de email → Usuario no vela respuesta. Sistema resiliente.

---

## RESUMEN: ARQUITECTURA ENTERPRISE EN ACCIÓN

| Aspecto | Patrón | Beneficio |
|---|---|---|
| **Autenticación** | JWT Stateless | Escalabilidad horizontal |
| **Validación** | Multi-capa | Errores específicos, debugging |
| **Persistencia** | MongoDB + S3 | Flexibilidad + escalabilidad ilimitada |
| **Estado** | Redux + Persist | UX resiliente, debugging |
| **Errores** | Middleware centralizado | Respuestas consistentes |
| **Estilo** | Theming centralizado | Cambios globales sin refactor |
| **Deploy** | Docker | Dev-Prod parity |
| **Estructura** | Monorepo separado | Equipos independientes |

---

## LECCIONES APRENDIDAS

1. **Validación en capas es no-negociable**: Detecta errores antes de que causen damage
2. **Centralizar configuración**: Temas, errores, validaciones — menos duplicación
3. **State management explícito**: Redux verboso al principio, pero previene bugs silenciosos
4. **Escalabilidad desde día 1**: JWT stateless, S3, Docker — no es over-engineering, es prudencia
5. **Monorepo con límites claros**: Independencia sin caos

---

**Autor**: Federico Irarrazaval  
**Nivel**: Semi-Senior (3 años técnico) + Senior (Liderazgo, Arquitectura)  
**Última actualización**: 2024

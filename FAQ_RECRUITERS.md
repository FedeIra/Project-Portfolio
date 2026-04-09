# FAQ - PREGUNTAS DE RECRUITERS & RESPUESTAS PREPARADAS

Use este documento para prepararse en entrevistas. Cada respuesta está estructurada con:
- **Contexto** (qué buscan)
- **Respuesta concisa**
- **Evidencia** (dónde encontrarla en el código)

---

## PREGUNTA 1: "Tienes 3 años de experiencia, ¿por qué aplicas a una posición Senior?"

### Qué Buscan
Confianza sin arrogancia. ¿Eres realista sobre tu nivel?

### Respuesta Estructura
```
"Tienes razón, tengo 3 años de experiencia técnica.
Pero mi foco estos 3 años fue en arquitectura y liderazgo, no en velocidad.

Mi Portfolio demuestra que:
1. Entiendo cómo diseñar sistemas escalables (JWT stateless, S3)
2. Documento decisiones técnicas (ARCHITECTURE.md)
3. Comunico con no-tech (explicar decisiones en términos de negocio)
4. Preparé la plataforma para crecer sin refactor completo

He visto juniors con 5+ años que solo escriben features.
Yo, en 3, construí una solución completa que podría manejar 100k usuarios sin cambios arquitectónicos.

Aplico a Senior porque el rol necesita alguien que lidera soluciones, 
no solo que codifique. Eso es lo que he hecho."
```

### Evidencia
- ARCHITECTURE.md (decisiones documentadas)
- EXECUTIVE_SUMMARY.md (visión de producto)
- Código: estructura limpia, validaciones en capas

---

## PREGUNTA 2: "¿Cuál fue tu mayor desafío en este proyecto?"

### Qué Buscan
Reflexión, problem-solving, growth mindset.

### Respuesta Estructura
```
"El desafío mayor fue preparar la arquitectura para escalar sin saber cuándo escalaría.

Cuando empecé, podía haber dicho 'es solo un portfolio, guardo archivos en el servidor'.
Pero pensé: '¿Qué pasa en 6 meses si 10k personas usan esto?'

Decisiones que tomé:
✅ JWT stateless → backend puede ser replicated sin sincronizar estado
✅ AWS S3 → archivos no dependen del servidor
✅ MongoDB flexible → schema puede evolucionar
✅ Docker → dev-prod parity

El desafío fue NOT over-engineering.
JWT es complejo si es 1 servidor forever.
Pero es simple si necesitas escalar.

Decidí: 'Es probable que esto crezca' → preparé la arquitectura.

Lección: Diferencia entre junior y senior es pensar en 'qué pasa mañana'."
```

### Evidencia
- ARCHITECTURE.md: secciones 1, 3, 8 (decisiones de escalabilidad)
- Código: ver JWT implementation, S3 integration

---

## PREGUNTA 3: "¿Por qué elegiste JWT en lugar de sessions?"

### Qué Buscan
Entendimiento técnico + justificación de negocio.

### Respuesta Estructura
```
"Excelente pregunta porque muestra trade-offs.

Sessions (la alternativa):
- ✅ Más fácil de implementar
- ❌ Requiere compartir estado entre servidores (sticky sessions, Redis)
- ❌ No escala horizontalmente sin overhead

JWT (lo que elegí):
- ✅ Stateless → cada servidor valida sin compartir estado
- ✅ Móvil-friendly → no requiere cookies
- ✅ Escalable horizontalmente → 10 servidores, 0 sincronización
- ❌ Requiere secure storage en frontend (localStorage es riesgo)

Para MÍ: plataforma que podría crecer → JWT.
Si fuera un admin panel de 10 usuarios → sessions.

La decisión depende de: ¿Cuál es mi métrica de éxito?
En mi caso: escalabilidad."
```

### Evidencia
- api/src/utils/authenticationStrategies/jwt.strategy.js
- ARCHITECTURE.md sección 1

---

## PREGUNTA 4: "¿Cómo documentas tu código?"

### Qué Buscan
¿Dejas deuda técnica? ¿Piensas en el próximo dev?

### Respuesta Estructura
```
"Mi enfoque es que el código sea auto-documentado.

PERO: Código claro ≠ Decisiones documentadas.

Ejemplo:
- El código muestra QUÉ hace (validar usuario)
- ARCHITECTURE.md explica POR QUÉ (validación en capas)

Niveles de documentación que uso:

1) Code comments — solo puntos no-obvios (cálculos complejos, workarounds)
2) Architecture decisions — ARCHITECTURE.md (por qué JWT, por qué S3)
3) README — setup y overview

Un dev nuevo llega, lee ARCHITECTURE.md, 
entiende por qué existe schemasValidation/ y services/.

En 2 años, yo mismo recuerdo POR QUÉ existen ciertos patrones."
```

### Evidencia
- ARCHITECTURE.md (completo)
- Code comments en puntos críticos
- README.md

---

## PREGUNTA 5: "¿Cómo manejás errores?"

### Qué Buscan
Robustez, user experience, logging.

### Respuesta Estructura
```
"Errores son parte de la especificación, no bugs.

Mi enfoque:

1) PREVENCIÓN
   - Validación en entrada (Joi schemas)
   - Validación en negocio (services)
   - Validación en persistencia (Mongoose)
   
   → El error se captura lo más pronto posible

2) CONSISTENCIA
   - Middleware centralizado (error.middleware.js)
   - Boom para mapear a códigos HTTP semánticos
   - Frontend sabe qué esperar
   
   Ejemplo:
   {
     statusCode: 400,
     error: 'Bad Request',
     message: '\"username\" is required'
   }

3) UX
   - Toast notifications (no page crashes)
   - Mensajes claros al usuario
   - Auto-retry en transient errors (network timeout)

4) DEBUGGING
   - Logging consistente
   - Redux DevTools en frontend (rastrear qué action causó error)
   - Structured errors en backend"
```

### Evidencia
- api/src/middlewares/error.middleware.js
- api/src/schemasValidation/
- README sección Error Handling

---

## PREGUNTA 6: "¿Cómo decides qué herramientas usar?"

### Qué Buscan
¿Eres pragmático? ¿O hype-driven?

### Respuesta Estructura
```
"No elijo herramientas por moda.
Elijo porque resuelven un problema específico.

Ejemplo 1: ¿Por qué Redux?
❌ 'Redux es popular'
✅ 'Necesito single source of truth en frontend.
    Si usuario recarga página, quiero recuperar estado.
    Redux + Redux Persist hace eso explícitamente.'

Ejemplo 2: ¿Por qué MongoDB?
❌ 'NoSQL es cool'
✅ 'Schema va a evolucionar. Users → Comments → Certificates.
    En SQL tendría que ALTER TABLE cada vez.
    En MongoDB, flexible schema permite evolución rápida.'

Ejemplo 3: ¿Por qué Docker?
❌ 'Todo el mundo lo usa'
✅ 'Dev-Prod parity. Laptop de dev ≠ servidor producción.
    Docker garantiza: código que funciona en dev funciona en prod.'

Método: 
1) ¿Cuál es el problema?
2) ¿Cuáles son las soluciones?
3) ¿Cuál da el mejor trade-off para ESTE proyecto?
4) Implemento"
```

### Evidencia
- ARCHITECTURE.md: toda la sección "Tech Stack - Decisiones Arquitectónicas"
- Código: ver cómo se usan Redux, Mongoose, Docker

---

## PREGUNTA 7: "¿Qué no habrías hecho diferente?"

### Qué Buscan
Reflexión crítica, crecimiento.

### Respuesta Estructura
```
"Hablemos de qué haría diferente:

1) ERROR VALIDATION EN FRONTEND
   Hoy: Toast notifications
   Mañana: Validation error component reutilizable
   Razón: Menos código duplicado

2) TESTING
   Hoy: Manual testing + código
   Mañana: Unit tests en services, integration tests en API
   Razón: Scaling sin bugs

3) PERMISSIONS/ROLES
   Hoy: Solo autenticación
   Mañana: Role-based access control (admin, viewer, editor)
   Razón: Necesario para empresa

4) OBSERVABILITY
   Hoy: Logging basic
   Mañana: Structured logging, tracing distribuido
   Razón: Debugging en producción

¿Por qué no lo hice?
- YAGNI (You Aren't Gonna Need It) al inicio
- Mejor tener producto funcionando que perfecto

¿Por qué sé qué cambiaría?
- Revisé el código con perspectiva
- Entiendo qué es 'deuda técnica buena' vs 'problema real'

La deuda buena: Falta testing (cuesta 2 semanas, agrega 80% confianza)
El problema real: No haría diferentes decisiones de arquitectura (JWT, S3, Docker — todas acertadas)"
```

### Evidencia
- Código: ver qué falta (tests, logging, permissions)
- ARCHITECTURE.md: "Lecciones aprendidas"

---

## PREGUNTA 8: "¿Trabajaste en equipo en esto?"

### Qué Buscan
¿Eres colaborativo? ¿Documentas para otros?

### Respuesta Estructura
```
"Es un proyecto personal, pero lo estructuré como si fuera enterprise.

¿Por qué?
Porque cuando trabajes en equipo, la diferencia entre buen código y mal código es:
- ¿Entiende tu colega POR QUÉ existe esto?
- ¿Puede otro dev hacer cambios sin romper todo?

Mis decisiones (monorepo separado, arquitectura modular, ARCHITECTURE.md):
- Un dev frontend puede trabajar en /client sin entender Node.js
- Un dev backend puede refactor /api sin tocar /client
- ARCHITECTURE.md permite onboarding sin 'explicación verbal'

Mentalidad:
Escribí código como si 10 devs lo leyeran.
Documenté decisiones como si 10 devs las cuestionaran.

En equipo real, ahorraría horas de 'por qué hiciste esto así?'"
```

### Evidencia
- Estructura separada /api y /client
- ARCHITECTURE.md (documentación para otros)
- Código comentado en puntos críticos

---

## PREGUNTA 9: "¿Qué tecnología querés aprender?"

### Qué Buscan
¿Eres curioso? ¿Crecimiento continuo?

### Respuesta Estructura (HONESTA)
```
"Depende del contexto de la empresa.

Pero en general:
1) TypeScript
   ¿Por qué? Runtime errors → compile-time errors
   
2) Testing frameworks (Jest, Cypress)
   ¿Por qué? Portfolio carece testing. Es crítico en empresa.
   
3) GraphQL
   ¿Por qué? REST es bueno, GraphQL es mejor para ciertos casos.
   Quiero entender cuándo usar cada uno.
   
4) Observability (Datadog, New Relic)
   ¿Por qué? Portfolio es hobby. En producción real, debugging es crítico.
   
5) Cloud architecture (AWS, GCP)
   ¿Por qué? Ahora sé S3. Pero infraestructura completa (scaling, monitoring, disaster recovery) es nivel siguiente.

¿No querés aprender Full Stack Blockchain Web3 NFT?
No. Eso es hype sin problema real.

Quiero aprender lo que REALMENTE necesito en empresa.
Además: Si empresa necesita algo específico, aprendo rápido."
```

### Evidencia
- Código: ve qué falta (TypeScript, tests)
- Mentalidad pragmática

---

## PREGUNTA 10: "Cuéntame de tu mayor error técnico"

### Qué Buscan
¿Eres humilde? ¿Aprendiste?

### Respuesta Estructura (HONESTA)
```
"Primer proyecto: Guardé passwords en plain text.
Después aprendí: Bcrypt es no-negociable.

En este portfolio:
No agregué permisos/roles desde el inicio.
Pensé: 'Soy el único usando.'
Problema: Cuando quiera agregar admin features, es refactor.

Lección:
- Auth ≠ Permissions
- Auth responde: '¿Eres quién dices ser?'
- Permissions responden: '¿Puedes hacer esto?'
- Debería haber agregado ambas desde inicio.

¿Por qué no lo hice?
Priorizaciones: MVP vs perfect.
Habría gastado 2 semanas en permisos que no necesitaba hoy.
Pero ahora son deuda técnica pequeña (1-2 horas para refactor).

¿Qué aprendí?
- Errores de seguridad → nunca
- Errores arquitectónicos → buena deuda si es consciente
- Documentar decisiones → salva de errores futuros"
```

### Evidencia
- Código: ver implementación de Bcrypt
- Detectar qué falta (permissions/roles)

---

## PREGUNTA 11: "¿Qué esperas en una empresa?"

### Qué Buscan
¿Alineación con cultura? ¿Ambición realista?

### Respuesta Estructura (PERSONALIZA)
```
"Busco:

1) PRODUCTO QUE IMPORTA
   No quiero agregar features aleatorias.
   Quiero entender: ¿Qué problema resuelve?
   
2) ARQUITECTURA COMO PRIORIDAD
   No 'deliver fast and break things forever'
   Sí 'deliver fast Y construir para escalar'
   
3) MENTALIDAD DE ENGINEERING
   No: CTO como dictador de tech
   Sí: Ingeniero que participa en decisiones
   
4) LEARNING CULTURE
   Equipo que quiera crecer
   No: 'Hacemos lo mismo hace 5 años'
   
5) IMPACTO VISIBLE
   Mi trabajo → usuarios → valor de negocio
   No: CRUD admin panels que no importan

¿Dónde me veo en 5 años?
Leading technical teams. No CEO.
Soy ingeniero de verdad, no empresario.

¿Cuál es tu salario esperado?
[Investigá market rate. Sé específico.]
'Entre $X y $Y, dependiendo de beneficios y crecimiento.'

¿Relocalizarías?
[Sé honesto. Si es no, di no.]"
```

### Evidencia
- Portfolio demuestra qué valores tienes

---

## PREGUNTA 12: "¿Alguna pregunta para nosotros?"

### Qué Buscan
¿Hiciste investigación? ¿Eres curioso?

### Preguntas que Deberías Hacer
```
1) TÉCNICA
"¿Cuál es el stack actual? ¿Hay deuda técnica conocida?"

2) ARQUITECTURA
"¿Cómo escalan arquitectura? ¿Monolitio vs microservicios?"

3) TEAM
"¿Qué tamaño tiene el equipo? ¿Cómo toman decisiones técnicas?"

4) CULTURE
"¿Cómo es el onboarding? ¿Hay mentoring?"

5) PRODUCT
"¿Quién define roadmap? ¿Ingeniero participa en decisiones de producto?"

6) LEARNING
"¿Invertís en desarrollo de empleados? ¿Conferencias, training?"

EVITA:
❌ "¿Cuál es el salario?" (pregunta después)
❌ "¿Cuántos días de vacaciones?" (prematura)
❌ Nada. Silencio es rojo.
```

### Por Qué Pregunta
Muestra:
- ✅ Que investigaste
- ✅ Que te importa arquitectura
- ✅ Que eres curioso
- ✅ Que buscas fit real, no solo job

---

## BONUS: PREGUNTAS TÉCNICAS EN ENTREVISTA

### "Explícame cómo funciona JWT"

**Estructura**:
```
1) User login → server verifica password
2) Server crea JWT (header.payload.signature)
3) Client guarda JWT (localStorage, cookie)
4) Próximo request → client envía JWT en Authorization header
5) Server valida signature (sin consultar DB)
6) Request procesado
```

**Ventaja**: Stateless. Server no guarda sesiones.
**Desventaja**: Si token es robado, no hay forma de revocarlo instantáneamente.
**Mitigación**: Expiration corta (1h) + refresh token (7d)

---

### "¿Cómo prevenís XSS?"

```
1) Input validation (Joi en backend)
2) Output encoding (React hace auto-escaping)
3) Content Security Policy (headers)
4) No usar dangerouslySetInnerHTML

Tu código: ve que usas Chakra UI (seguro por default)
```

---

### "¿MongoDB vs SQL? Cuándo cada uno?"

```
MongoDB: Schema flexible
- Ejemplo: Comentarios que evolucionan (text, images, reactions)
- Ventaja: No ALTER TABLE

SQL: Transacciones ACID
- Ejemplo: Transacciones de dinero
- Ventaja: Garantía matemática de consistencia

Tu proyecto: MongoDB correcto porque schema evoluciona.
```

---

### "¿Cómo debuggeás problemas de performance?"

```
Frontend: Chrome DevTools
- Network tab (request times)
- Performance tab (CPU, memory)
- Redux DevTools (state changes)

Backend: Node debugger
- console.log (rápido)
- Structured logging (producción)
- APM tools (Datadog, New Relic)

Tu respuesta debe mostrar:
✅ Que tienes método
❌ No: "Agrego console.log hasta encontrarlo"
```

---

## RESUMEN: RESPONDE COMO SENIOR

| Pregunta | Senior Mindset |
|---|---|
| "¿Por qué JWT?" | Justificación de negocio (escalabilidad) |
| "¿Cómo documentas?" | Diferencia entre código y decisiones |
| "¿Mayor desafío?" | Reflexión + growth |
| "¿Qué cambiarías?" | Honestidad con criterio |
| "¿Preguntas para nosotros?" | Investigación + curiosidad |

**Frase clave para cualquier pregunta**:
"Depende del contexto. En este proyecto fue X porque Y. Pero si el contexto fuera diferente, sería Z."

Eso demuestra que entiendes trade-offs, no dogmas.

---

**Última recomendación**: 
- Lee este doc 1 vez
- Responde cada pregunta EN VOZ ALTA (sola en tu cuarto, sin pena)
- Practica hasta que suene natural, no memorizado

Good luck! 🚀

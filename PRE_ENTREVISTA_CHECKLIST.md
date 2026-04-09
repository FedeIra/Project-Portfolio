# PRE-ENTREVISTA CHECKLIST - ÚLTIMOS 10 MINUTOS

Leo esto 10 minutos antes de la entrevista. Quick reference.

---

## TU ELEVATOR PITCH (30 SEGUNDOS)

```
"Soy Federico, desarrollador con 3 años en arquitectura full-stack.
Mi diferencial: entiendo producto de punta a punta.

En mi portfolio construí plataforma escalable con:
- JWT stateless (escala horizontal)
- Validaciones en capas (errores específicos)
- Docker ready-to-deploy

Documento decisiones, no solo código.
Busco empresa donde arquitectura es prioridad.
Interesado en [ROLE: Senior Eng / Product Eng / Tech Lead]."
```

**Tiempo**: Practica hasta que suene natural (no memorizado).

---

## 3 PUNTOS PARA COMUNICAR

### 1️⃣ DIFERENCIAL (Semi-Senior técnico, Senior liderazgo)
- ✅ "Tengo 3 años pero construí arquitectura que escala a 100k usuarios"
- ✅ "Documento POR QUÉ, no solo QUÉ"
- ✅ "Entiendo decisiones técnicas en términos de negocio"

### 2️⃣ EVIDENCIA EN CÓDIGO
- ✅ Monorepo separado (/api, /client)
- ✅ Validaciones en capas
- ✅ JWT stateless
- ✅ ARCHITECTURE.md

### 3️⃣ MENTALIDAD
- ✅ "¿Qué pasa mañana?" → preparo la arquitectura
- ✅ No dogmas, trade-offs conscientes
- ✅ Escalable sin over-engineering

---

## PREGUNTAS QUE VAS A RECIBIR

### 1. "Cuéntame de este proyecto"
**Respuesta estructura**:
- El problema (necesitaba plataforma escalable)
- Mi intervención (JWT, validaciones, Docker)
- Impacto (ready para 100k usuarios)

### 2. "¿Por qué JWT vs Sessions?"
**Respuesta corta**:
"Stateless → escalo horizontalmente sin sincronizar estado. Si arquitectura fuera 1 servidor forever, sessions sería más simple. Pero preparé para escalar."

### 3. "¿Tienes 3 años, por qué aplicas a Senior?"
**Respuesta corta**:
"3 años técnico. Pero construí soluciones, no features. ARCHITECTURE.md demuestra pensamiento senior."

### 4. "¿Documentas tu código?"
**Respuesta corta**:
"Código auto-documentado. ARCHITECTURE.md documenta decisiones (POR QUÉ, no QUÉ)."

### 5. "¿Preguntas para nosotros?"
**Preguntas que haga**:
- "¿Cómo escalan arquitectura?" 
- "¿Ingeniero participa en decisiones de producto?"
- "¿Hay deuda técnica conocida?"

---

## LO QUE NO DIGAS

❌ "Tengo 3 años de experiencia" (suena limitante)  
✅ "Tengo 3 años construyendo arquitectura escalable"

❌ "Programé un full-stack app" (genérico)  
✅ "Lideré una solución que escala a 100k usuarios sin cambios arquitectónicos"

❌ "Usé JWT porque es más seguro" (no es verdad)  
✅ "Usé JWT porque es stateless y escala horizontalmente"

❌ Hablar de features (CRUD, login, comments)  
✅ Hablar de decisiones (por qué JWT, por qué S3, por qué Redis no)

---

## ANTES DE HABLAR

### ✅ ANTES DE ENTREVISTA
- [ ] Relé EXECUTIVE_SUMMARY.md (refresha memoria)
- [ ] Relé FAQ_RECRUITERS.md (respuestas preparadas)
- [ ] Practica elevator pitch en voz alta
- [ ] Prepara preguntas para ELLOS (3-5 preguntas)
- [ ] Revisa el rol específico (qué skills necesitan)
- [ ] Ten código abierto en otra pestaña (GitHub)

### ✅ DURANTE ENTREVISTA
- [ ] Escucha completamente la pregunta (no interrumpas)
- [ ] Responde con estructura: Contexto → Respuesta → Evidencia
- [ ] Comunica con confianza (preparaste)
- [ ] Si no sabes respuesta: "No sé, pero investigaría así..."
- [ ] Haz preguntas (demuestra que escuchas)

### ✅ DESPUÉS DE ENTREVISTA
- [ ] Agradece en email
- [ ] Menciona un punto específico de la conversación
- [ ] Reafirma interés

---

## RESPUESTAS CORTAS PARA PREGUNTAS TÉCNICAS

### "¿Cómo manejás errors?"
"Validación en capas (Joi → Services → Mongoose). Middleware centralizado mapea a códigos HTTP semánticos. Frontend maneja con Toast."

### "¿MongoDB vs SQL?"
"MongoDB: schema flexible. SQL: ACID transactions. Aquí schema evoluciona → MongoDB."

### "¿Cómo debuggeás?"
"Frontend: DevTools + Redux DevTools. Backend: structured logging."

### "¿Escalabilidad?"
"JWT stateless, S3 para archivos, MongoDB flexible. Backend sin estado → escalo horizontalmente."

---

## NÚMEROS PARA CITAR

- ✅ "3 años en arquitectura" (no 3 años general)
- ✅ "Plataforma escalable a 100k+ usuarios" (sin refactor)
- ✅ "20+ componentes reutilizables" (si preguntan frontend)
- ✅ "10 decisiones arquitectónicas documentadas" (ARCHITECTURE.md)

---

## SI TE PONEN CODING CHALLENGE

### Qué Hacen?
Te piden código en whiteboard o online editor.

### Cómo Reaccionar?
```
1) Escucha completo el problema
2) Clarifica: "¿Necesitas O(n) optimización? ¿Concurrencia?"
3) Propón solución: "Hago arquitectura primero, luego código"
4) Código LIMPIO: buenos nombres, sin comentarios obvios
5) Explica mientras codificas
6) Test cases: happy path + edge cases
```

### Si Es "Diseña Sistema"
```
1) Clarifica requisitos (escala, SLA, latencia)
2) Dibuja componentes: Frontend → API → DB → Storage
3) Explica decisiones: "JWT porque stateless"
4) Trade-offs: "Si fuera más transaccional, usaría SQL"
```

---

## DURANTE LA ENTREVISTA: FRASES CLAVE

**Si no sabes algo**:
"No sé responder eso directamente, pero investigaría así... 
[Explica método, no respuesta]"

**Si quieres tiempo**:
"Dame 10 segundos para pensar la mejor respuesta..."

**Si desacuerdas**:
"Interesante perspectiva. Yo lo vería así: [tu razón]"

**Si quieres clarificar**:
"¿Me confirmas si entiendo bien? [Resume lo que oíste]"

---

## POSIBLES "TRAPS" (Y CÓMO EVITARLOS)

### TRAP 1: "¿Eres fullstack? ¿Qué lado es tu fuerte?"
**Respuesta**:
"Sí, ambos. Mi fuerte es ARQUITECTURA (decisiones que conectan frontend+backend). 
Si tuviera que elegir, diría backend (decisiones de escalabilidad)."

### TRAP 2: "¿Por qué no usaste TypeScript?"
**Respuesta**:
"Buena pregunta. Portfolio es hobby, prioriticé features. 
En empresa, TypeScript sería no-negociable para [ROLE]. Es skill que domino/puedo mejorar."

### TRAP 3: "¿Por qué no hay tests?"
**Respuesta**:
"Deuda técnica consciente. Portfolio era MVP.
En empresa, tests son prioridad: unit tests en services, integration en API. 
Es skill que tengo/puedo fortalecer."

### TRAP 4: "¿Trabajaste con [TECH NO CONOCES]?"
**Respuesta**:
"No, pero mi experiencia con [TECH SIMILAR] me permitiría aprender rápido.
¿Eso es crítico para el rol?"

---

## FINAL: ÚLTIMA FRASE

Antes de irte:
```
"Aprecio el tiempo. Estoy genuinamente interesado en este rol
porque [algo específico de la empresa/rol/equipo].
¿Cuál es el próximo paso?"
```

---

## RECURSOS RÁPIDOS

Si el entrevistador pregunta:
- "¿Cómo escalaría X?" → ARCHITECTURE.md sección 1 (JWT stateless)
- "¿Cómo documentas?" → ARCHITECTURE.md sección 5 (validaciones)
- "¿Por qué esas decisiones?" → DIFERENCIAL.md (evidencia)
- "¿Qué fue desafiante?" → FAQ_RECRUITERS.md pregunta 2

---

**MENTALIDAD FINAL**

No vas a "ganarte" la entrevista.
Vas a demostrar que eres la mejor opción.

La diferencia:
- ❌ Intentar parecer genial
- ✅ Ser genuino, preparado, reflexivo

Preparaste. Tienes evidencia (código + documentación).
Ahora: habla con confianza y escucha de verdad.

---

**Buena suerte! 🚀**

Vos esto.

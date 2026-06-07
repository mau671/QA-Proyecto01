# TODO: Proyecto 01: Aseguramiento de la Calidad

> **Líder:** Mauricio González  
> **Aplicación:** Claustrum  
> **Repositorio analizado:** [https://github.com/mau671/claustrum](https://github.com/mau671/claustrum)  
> **Código local:** `/home/mau/Dev/horarios/`  
> **Entrega:** 14 de junio

## Reglas de trabajo

- No agregar módulos nuevos al alcance.
- No trabajar en `Evaluations`, `Moderation`, documentación interna, CI/CD ni data pipeline Python.
- Toda prueba ejecutada debe tener evidencia.
- Todo defecto encontrado debe registrarse en `docs/defectos.md`.
- Todo resultado de ejecución debe actualizarse en `docs/casos-de-prueba.md` y `docs/matriz-de-trazabilidad.md`.
- Los documentos se escriben en español, con redacción técnica y sin emojis.
- Usar dos puntos para separar ideas en títulos o frases, no guiones largos.

## Convenciones ya definidas

| Elemento | Formato |
|----------|---------|
| Requisitos funcionales | `RF-M1`, `RF-I1`, `RF-A1` |
| Requisitos no funcionales | `RNF-M1`, `RNF-I1`, `RNF-A1` |
| Casos de prueba | `CP-M-001`, `CP-I-001`, `CP-A-001` |
| Defectos | `DEF-M-001`, `DEF-I-001`, `DEF-A-001` |
| Evidencias | `evidencias/<integrante>/<id-caso>-<descripcion>.png` |
| Reportes de herramientas | `evidencias/reportes/<herramienta>-<modulo>.<ext>` |
| Estado de caso | `Pendiente`, `Ejecutado`, `Bloqueado` |
| Resultado de caso | `Aprobado`, `Fallido`, `No ejecutado` |
| Severidad | `Crítica`, `Alta`, `Media`, `Baja` |
| Prioridad | `Alta`, `Media`, `Baja` |

## Trabajo pendiente

- [ ] Ejecutar casos de prueba definidos en `docs/casos-de-prueba.md`.
- [ ] Guardar evidencias en `evidencias/`.
- [ ] Registrar defectos reales en `docs/defectos.md`.
- [ ] Actualizar resultados en `docs/casos-de-prueba.md`.
- [ ] Actualizar resultados en `docs/matriz-de-trazabilidad.md`.
- [ ] Completar resultados, análisis, conclusiones y recomendaciones en `docs/informe-final.md`.
- [ ] Completar automatizaciones necesarias en `tests/playwright/` y `tests/newman/`.

## Mauricio González: ruta schedule y ruta overview

**Requisito funcional:** `RF-M1: El usuario autenticado puede crear, guardar y cargar un horario académico.`  
**Requisito no funcional:** `RNF-M1: El panel de resumen debe cargar en menos de 2 segundos en una conexión normal.`

- [x] Ejecutar `CP-M-001`: iniciar sesión y entrar a la ruta schedule.
- [x] Ejecutar `CP-M-002`: agregar un curso/grupo al horario.
- [x] Ejecutar `CP-M-003`: guardar horario y verificar persistencia.
- [x] Ejecutar `CP-M-004`: cargar horario guardado después de recargar la página.
- [x] Ejecutar `CP-M-005`: validar el panel de resumen con Lighthouse y Performance.
- [x] Ejecutar `CP-M-006`: probar selección inválida o conflicto de horario.
- [x] Ejecutar prueba de carga ligera en la ruta overview con ApacheBench.
- [x] Ejecutar prueba unitaria con Vitest sobre lógica utilitaria relacionada con calendario u horarios.
- [x] Ejecutar prueba de aceptación de usuario sobre el flujo de creación de horario.
- [x] Ejecutar revisión estática de `src/components/schedule/`.
- [x] Ejecutar revisión estática de `src/components/calendar/`.
- [x] Revisar `src/lib/calendar-utils.ts` para complejidad, duplicación y legibilidad.
- [x] Automatizar y ejecutar con Playwright el flujo `login: schedule: agregar grupo: guardar`.
- [x] Guardar evidencias de cada caso en `evidencias/mauricio/`.
- [x] Registrar defectos `DEF-M-*` si aparecen.
- [x] Actualizar resultados de `CP-M-001` a `CP-M-009`.
- [x] Redactar resultados de la ruta schedule y la ruta overview en `docs/informe-final.md`.

## Isaac Jiménez: ruta professors y API de reseñas

**Requisito funcional:** `RF-I1: El usuario puede consultar y enviar una reseña de profesor con los campos obligatorios.`  
**Requisito no funcional:** `RNF-I1: El módulo de reseñas debe rechazar entradas maliciosas o inválidas.`

- [ ] Ejecutar `CP-I-001`: buscar profesor y abrir detalle.
- [ ] Ejecutar `CP-I-002`: consultar reseñas existentes de un profesor.
- [ ] Ejecutar `CP-I-003`: enviar reseña válida.
- [ ] Ejecutar `CP-I-004`: enviar reseña con campos obligatorios vacíos.
- [ ] Ejecutar `CP-I-005`: intentar inyección XSS en comentario de reseña.
- [ ] Ejecutar `CP-I-006`: probar endpoint de reseñas con Postman/Newman.
- [ ] Ejecutar prueba de aceptación de usuario sobre consulta y envío de reseña.
- [ ] Ejecutar `CP-I-008`: intentar SQL Injection en campos de búsqueda o parámetros disponibles del módulo de reseñas.
- [ ] Ejecutar revisión estática de `workers/api/src/routes/professor-reviews.ts`.
- [ ] Revisar validaciones en `src/lib/professor-reviews/`.
- [ ] Revisar vulnerabilidades, duplicación, código muerto y dependencias relevantes del módulo de reseñas.
- [ ] Ejecutar y ajustar la colección Newman de `tests/newman/professor-reviews.postman_collection.json` con datos reales.
- [ ] Guardar evidencias de cada caso en `evidencias/isaac/`.
- [ ] Registrar defectos `DEF-I-*` si aparecen.
- [ ] Actualizar resultados de `CP-I-001` a `CP-I-008`.
- [ ] Redactar resultados de la ruta professors y seguridad en `docs/informe-final.md`.

## Armando Castro: rutas auth, onboarding y curriculum

**Requisito funcional:** `RF-A1: El usuario puede iniciar sesión y completar el onboarding académico.`  
**Requisito no funcional:** `RNF-A1: El usuario puede llegar a las rutas overview, schedule, curriculum y professors en máximo 3 clics desde la aplicación autenticada.`

- [ ] Ejecutar `CP-A-001`: iniciar sesión con credenciales válidas.
- [ ] Ejecutar `CP-A-002`: iniciar sesión con credenciales inválidas.
- [ ] Ejecutar `CP-A-003`: completar o verificar flujo de onboarding.
- [ ] Ejecutar `CP-A-004`: abrir la ruta curriculum y consultar detalle de curso.
- [ ] Ejecutar `CP-A-005`: medir navegación en máximo 3 clics.
- [ ] Ejecutar `CP-A-006`: revisar accesibilidad básica de la ruta curriculum con Lighthouse.
- [ ] Ejecutar prueba de aceptación de usuario sobre navegación principal autenticada.
- [ ] Ejecutar `CP-A-008`: validar control de acceso a rutas protegidas sin sesión.
- [ ] Ejecutar revisión estática de `src/routes/auth/`.
- [ ] Ejecutar revisión estática de `src/routes/onboarding/`.
- [ ] Ejecutar revisión estática de `src/routes/curriculum/`.
- [ ] Revisar legibilidad, modularidad, duplicación, complejidad, convenciones y código muerto en sus rutas asignadas.
- [ ] Automatizar con Playwright el flujo `login: onboarding o curriculum: detalle de curso`.
- [ ] Guardar evidencias de cada caso en `evidencias/armando/`.
- [ ] Registrar defectos `DEF-A-*` si aparecen.
- [ ] Actualizar resultados de `CP-A-001` a `CP-A-008`.
- [ ] Redactar resultados de las rutas auth, onboarding y curriculum en `docs/informe-final.md`.

## Trabajo final de todos

- [ ] Completar tabla final de métricas en `docs/informe-final.md`.
- [ ] Completar análisis de deuda técnica en `docs/informe-final.md`.
- [ ] Completar análisis de riesgos en `docs/informe-final.md`.
- [ ] Completar conclusiones generales en `docs/informe-final.md`.
- [ ] Completar recomendaciones en `docs/informe-final.md`.
- [ ] Verificar que no quedan casos con estado `Pendiente` sin justificación.
- [ ] Verificar que todo defecto tiene evidencia.
- [ ] Verificar que todo requisito tiene al menos un caso asociado.
- [ ] Verificar que todo caso aparece en la matriz de trazabilidad.
- [ ] Preparar presentación del proyecto.
- [ ] Hacer revisión final cruzada.

## Casos mínimos definidos

| ID | Responsable | Módulo | Tipo | Objetivo |
|----|-------------|--------|------|----------|
| CP-M-001 | Mauricio | Ruta schedule | Funcional | Verificar acceso al creador de horarios. |
| CP-M-002 | Mauricio | Ruta schedule | Funcional | Verificar selección de curso/grupo en horario. |
| CP-M-003 | Mauricio | Ruta schedule | Integración | Verificar guardado de horario. |
| CP-M-004 | Mauricio | Ruta schedule | Sistema | Verificar persistencia después de recargar. |
| CP-M-005 | Mauricio | Ruta overview | Rendimiento | Medir tiempo de carga del panel de resumen. |
| CP-M-006 | Mauricio | Ruta schedule | Negativo | Validar comportamiento ante selección inválida o conflicto. |
| CP-M-007 | Mauricio | Rutas schedule u overview | Carga | Simular carga ligera sobre una ruta principal. |
| CP-M-008 | Mauricio | Horarios | Unitario | Probar lógica utilitaria relacionada con calendario u horarios. |
| CP-M-009 | Mauricio | Ruta schedule | UAT | Validar aceptación del flujo de creación de horario. |
| CP-I-001 | Isaac | Ruta professors | Funcional | Buscar profesor y abrir detalle. |
| CP-I-002 | Isaac | Ruta professors | Funcional | Consultar reseñas existentes. |
| CP-I-003 | Isaac | Ruta professors | Funcional | Enviar reseña válida. |
| CP-I-004 | Isaac | Ruta professors | Negativo | Validar campos obligatorios vacíos. |
| CP-I-005 | Isaac | Ruta professors | Seguridad | Probar entrada XSS en comentario. |
| CP-I-006 | Isaac | API de reseñas | API | Probar endpoint de reseñas con Postman/Newman. |
| CP-I-007 | Isaac | Ruta professors | UAT | Validar aceptación del flujo de consulta y envío de reseña. |
| CP-I-008 | Isaac | Ruta professors | Seguridad | Probar entrada SQL Injection en búsqueda o parámetros disponibles. |
| CP-A-001 | Armando | Ruta auth | Funcional | Iniciar sesión con credenciales válidas. |
| CP-A-002 | Armando | Ruta auth | Negativo | Iniciar sesión con credenciales inválidas. |
| CP-A-003 | Armando | Ruta onboarding | Integración | Completar o verificar configuración inicial. |
| CP-A-004 | Armando | Ruta curriculum | Funcional | Consultar detalle de curso. |
| CP-A-005 | Armando | Navegación | Usabilidad | Llegar a secciones principales en máximo 3 clics. |
| CP-A-006 | Armando | Ruta curriculum | Accesibilidad | Revisar accesibilidad básica con Lighthouse. |
| CP-A-007 | Armando | Navegación | UAT | Validar aceptación del flujo de navegación principal autenticada. |
| CP-A-008 | Armando | Rutas protegidas | Seguridad | Validar control de acceso sin sesión. |

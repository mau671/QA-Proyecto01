# Progreso de Isaac

## Alcance asignado

| Requisito | Descripción                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| RF-I1     | El usuario puede consultar y enviar una reseña de profesor con los campos obligatorios. |
| RNF-I1    | El módulo de reseñas debe rechazar entradas maliciosas o inválidas.                     |

## Casos ejecutados

| Caso     | Estado   | Evidencia principal                                 |
|----------|----------|-----------------------------------------------------|
| CP-I-001 | Aprobado | `evidencias/isaac/CP-I-001-buscar-profesor.png`     |
| CP-I-002 | Aprobado | `evidencias/isaac/CP-I-002-consultar-resenas.png`   |
| CP-I-003 | Fallido  | `evidencias/isaac/CP-I-003-enviar-resena.png`       |
| CP-I-004 | Aprobado | `evidencias/isaac/CP-I-004-campos-vacios.png`       |
| CP-I-005 | Aprobado | `evidencias/isaac/CP-I-005-xss.png`                 |
| CP-I-006 | Aprobado | `evidencias/reportes/newman-professor-reviews.json` |
| CP-I-007 | Fallido  | `evidencias/isaac/CP-I-007-uat-resenas.png`         |
| CP-I-008 | Aprobado | `evidencias/isaac/CP-I-008-sql-injection.png`       |

## Registro de avance

| Paso | Estado | Observación |
|------|--------|-------------|
| Pruebas funcionales | Completado | Se ejecutaron CP-I-001, CP-I-002 y CP-I-003 sobre la ruta professors. La búsqueda y consulta funcionaron correctamente, pero el envío de reseña válida falló con `Invalid review payload`. |
| Pruebas negativas | Completado | CP-I-004 validó que el formulario rechaza campos obligatorios vacíos mediante el mensaje `Revisa los datos del formulario y vuelve a intentar.` |
| Pruebas de seguridad | Completado | CP-I-005 y CP-I-008 validaron que las entradas XSS y SQL Injection no se ejecutan, no rompen la interfaz y no exponen errores técnicos. |
| Prueba API | Completado | Se ejecutó la colección `tests/newman/professor-reviews.postman_collection.json` contra endpoints reales de Supabase RPC. Newman ejecutó 4 solicitudes y 14 aserciones sin fallos. |
| Prueba UAT | Completado | CP-I-007 verificó que el usuario puede llegar al formulario, pero el flujo completo no se completa porque el envío válido es rechazado con `Invalid review payload`. |
| Automatización | Completado | Se creó y ejecutó `tests/playwright/isaac-professors.spec.ts`; Playwright finalizó con 1 prueba aprobada y generó reporte JSON/HTML. |
| Revisión estática | Completado | Se revisaron los artefactos disponibles del proyecto QA, la colección Newman, evidencias, resultados de API y comportamiento visible de la aplicación. No se contó con acceso directo al código fuente de Claustrum para revisar archivos internos del módulo. |
| Documentación final | Completado | Se actualizaron casos, matriz, defectos, progreso e informe con los resultados de Isaac. |

# Progreso de Mauricio

## Alcance asignado

| Requisito | Descripción |
|-----------|-------------|
| RF-M1 | El usuario autenticado puede crear, guardar y cargar un horario académico. |
| RNF-M1 | El panel de resumen debe cargar en menos de 2 segundos en una conexión normal. |

## Casos a ejecutar

| Caso | Estado | Evidencia principal |
|------|--------|---------------------|
| CP-M-001 | Aprobado | `evidencias/mauricio/CP-M-001-acceso-schedule.png` |
| CP-M-002 | Aprobado | `evidencias/mauricio/CP-M-002-agregar-grupo.png` |
| CP-M-003 | Aprobado | `evidencias/mauricio/CP-M-003-guardar-horario.png` |
| CP-M-004 | Aprobado | `evidencias/mauricio/CP-M-004-cargar-horario.png` |
| CP-M-005 | Aprobado | `evidencias/reportes/performance-overview.json`, `evidencias/reportes/lighthouse-overview.html` |
| CP-M-006 | Aprobado | `evidencias/mauricio/CP-M-006-conflicto.png` |
| CP-M-007 | Aprobado | `evidencias/reportes/apachebench-overview.txt` |
| CP-M-008 | Aprobado | `evidencias/reportes/vitest-horarios.txt` |
| CP-M-009 | Aprobado | `evidencias/mauricio/CP-M-009-uat-horario.png` |

## Registro de avance

| Paso | Estado | Observación |
|------|--------|-------------|
| Revisión estática | Completado | oxlint finalizó con código 0 sobre componentes schedule, calendar y utilidades de calendario. |
| Prueba unitaria | Completado | Vitest ejecutó 4 pruebas y todas pasaron. |
| Pruebas funcionales | Completado | CP-M-001 a CP-M-004, CP-M-006 y CP-M-009 ejecutados en navegador con sesión demo. |
| Rendimiento | Completado | Performance registró LCP de 1633 ms y Lighthouse registró accesibilidad 100. |
| Carga ligera | Completado | Se ejecutó ApacheBench con 30 solicitudes y concurrencia 3. |
| Automatización | Completado | Se creó y ejecutó `tests/playwright/mauricio-schedule.spec.ts`; Playwright finalizó con 1 prueba aprobada. |
| Documentación final | Completado | Se actualizaron casos, matriz, defectos, progreso e informe con los resultados actuales. |

# Matriz de Trazabilidad

| Requisito | Descripción | Caso(s) de prueba | Tipo de prueba | Resultado | Defecto asociado | Responsable |
|-----------|-------------|-------------------|----------------|-----------|------------------|-------------|
| RF-M1 | El usuario autenticado puede crear, guardar y cargar un horario académico. | CP-M-001, CP-M-002, CP-M-003, CP-M-004, CP-M-006, CP-M-008, CP-M-009 | Funcional, integración, sistema, negativo, unitario, UAT | Aprobado | N/A | Mauricio |
| RNF-M1 | El panel de resumen debe cargar en menos de 2 segundos en una conexión normal. | CP-M-005, CP-M-007 | Rendimiento, carga | Aprobado | N/A | Mauricio |
| RF-I1 | El usuario puede consultar y enviar una reseña de profesor con los campos obligatorios. | CP-I-001, CP-I-002, CP-I-003, CP-I-004, CP-I-006, CP-I-007 | Funcional, negativo, API, UAT | Pendiente | N/A | Isaac |
| RNF-I1 | El módulo de reseñas debe rechazar entradas maliciosas o inválidas. | CP-I-005, CP-I-006, CP-I-008 | Seguridad, API | Pendiente | N/A | Isaac |
| RF-A1 | El usuario puede iniciar sesión y completar el onboarding académico. | CP-A-001, CP-A-002, CP-A-003, CP-A-008 | Funcional, negativo, integración, seguridad | Aprobado | DEF-A-1 | Armando |
| RNF-A1 | El usuario puede llegar a las rutas overview, schedule, curriculum y professors en máximo 3 clics desde la aplicación autenticada. | CP-A-004, CP-A-005, CP-A-006, CP-A-007 | Funcional, usabilidad, accesibilidad, UAT | Aprobado | N/A | Armando |

## Criterio de actualización durante la ejecución

- Cambiar `Resultado` a `Aprobado`, `Fallido` o `No ejecutado` cuando se complete cada caso.
- Si un caso falla, registrar el defecto en `docs/defectos.md` y reemplazar `N/A` por el ID del defecto.
- Si un requisito necesita más casos, agregarlos sin cambiar la convención de IDs.

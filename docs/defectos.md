# Gestión de Defectos

## Escala de severidad

| Severidad | Criterio |
|-----------|----------|
| Crítica | Bloquea un flujo principal o expone información sensible. |
| Alta | Afecta una función importante y tiene alternativa limitada. |
| Media | Afecta experiencia, consistencia o resultado parcial. |
| Baja | Problema visual, texto, accesibilidad menor o mejora. |

## Escala de prioridad

| Prioridad | Criterio |
|-----------|----------|
| Alta | Debe atenderse antes de entregar o afecta fuertemente el resultado. |
| Media | Debe documentarse y recomendar corrección. |
| Baja | Puede quedar como mejora futura. |

## Registro de defectos

| ID | Título | Descripción | Severidad | Prioridad | Pasos para reproducir | Resultado esperado | Resultado actual | Evidencia | Estado | Responsable |
|----|--------|-------------|-----------|-----------|------------------------|--------------------|------------------|-----------|--------|-------------|
| Sin defectos registrados en las pruebas actuales | No aplica | Las pruebas CP-M-001 a CP-M-009 no evidenciaron defectos funcionales o bloqueantes en las rutas schedule y overview. | No aplica | No aplica | No aplica | No aplica | No aplica | Evidencias en `evidencias/mauricio/` y `evidencias/reportes/` | No aplica | Mauricio |
| DEF-A-1 | Error incorrecto | La prueba de login con credenciales inválidas retorna que el correo no tiene un formato válido, lo cual no es el error. | Baja | Baja | En el inicio de sesión, ingresar un correo electrónico con formato correcto pero con la contraseña incorrecta. | Debería indicar que la contraseña es incorrecta o credenciales inválidas. | Muestra "El correo electrónico no tiene un formato válido." | `evidencias/armando/CP-A-002-login-invalido.png` | Abierto | Armando |
| DEF-I-001 | Envío de reseña válida rechazado | Al completar el formulario de reseña con datos aparentemente válidos, la aplicación rechaza el envío con el mensaje `Invalid review payload`, sin indicar qué campo específico causa el problema. | Alta | Alta | 1. Iniciar sesión con usuario demo. 2. Abrir `/professors/480`. 3. Presionar `Escribir reseña`. 4. Completar curso, periodo, calificación obtenida, comentario válido, calificaciones numéricas, asistencia obligatoria y etiquetas. 5. Enviar la reseña. | La reseña válida debería enviarse correctamente o quedar pendiente de aprobación con un mensaje claro. | La aplicación rechaza el envío y muestra `Invalid review payload`. | `evidencias/isaac/CP-I-003-enviar-resena.png`, `evidencias/isaac/CP-I-007-uat-resenas.png` | Abierto | Isaac |


## Estados permitidos

- Abierto
- En análisis
- Corregido
- Cerrado
- No aplica

## Criterio de registro

Cuando se detecte un defecto, se reemplaza la fila inicial por registros reales. La numeración se mantiene por responsable: `DEF-M-*` para Mauricio, `DEF-I-*` para Isaac y `DEF-A-*` para Armando.

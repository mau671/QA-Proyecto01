# Casos de Prueba

## Campos registrados por caso

| Campo | Valor esperado |
|-------|----------------|
| ID | Código del caso, por ejemplo `CP-M-001`. |
| Nombre | Nombre corto del caso. |
| Objetivo | Qué se desea validar. |
| Requisito asociado | RF o RNF correspondiente. |
| Tipo | Funcional, integración, sistema, seguridad, rendimiento, usabilidad, negativo o API. |
| Prioridad | Alta, Media o Baja. |
| Precondiciones | Estado requerido antes de ejecutar. |
| Datos de prueba | Usuario, entradas, curso, profesor, payload, etc. |
| Pasos | Secuencia numerada de ejecución. |
| Resultado esperado | Comportamiento correcto. |
| Resultado obtenido | Se completa durante la ejecución. |
| Estado | Pendiente, Ejecutado o Bloqueado. |
| Resultado | Aprobado, Fallido o No ejecutado. |
| Evidencia | Ruta de captura o reporte. |

## Mauricio: ruta schedule y ruta overview

### CP-M-001: Acceso al creador de horarios

| Campo | Valor |
|-------|-------|
| ID | CP-M-001 |
| Nombre | Acceso al creador de horarios |
| Objetivo | Verificar que un usuario autenticado puede entrar a la ruta schedule. |
| Requisito asociado | RF-M1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Usuario demo autenticado. |
| Datos de prueba | `demo@demo.com` / `pruebas1234` |
| Pasos | 1. Iniciar sesión. 2. Abrir la ruta schedule. 3. Verificar que carga el calendario. |
| Resultado esperado | El calendario y los controles de horario se muestran sin errores. |
| Resultado obtenido | La ruta schedule cargó correctamente para el usuario demo y mostró el creador de horarios con cursos disponibles y calendario. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-001-acceso-schedule.png` |

### CP-M-002: Agregar grupo al horario

| Campo | Valor |
|-------|-------|
| ID | CP-M-002 |
| Nombre | Agregar grupo al horario |
| Objetivo | Verificar que se puede agregar un curso/grupo al horario. |
| Requisito asociado | RF-M1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Usuario en la ruta schedule con cursos disponibles. |
| Datos de prueba | Primer curso y primer grupo disponibles. |
| Pasos | 1. Abrir la ruta schedule. 2. Seleccionar primer curso disponible. 3. Seleccionar primer grupo disponible. 4. Verificar aparición en calendario. |
| Resultado esperado | El grupo seleccionado aparece en el calendario. |
| Resultado obtenido | Se seleccionó el grupo `MA0101-01` de Matemática General y apareció en el calendario semanal en horario diurno. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-002-agregar-grupo.png` |

### CP-M-003: Guardar horario

| Campo | Valor |
|-------|-------|
| ID | CP-M-003 |
| Nombre | Guardar horario |
| Objetivo | Verificar que el horario se guarda correctamente. |
| Requisito asociado | RF-M1 |
| Tipo | Integración |
| Prioridad | Alta |
| Precondiciones | Horario con al menos un grupo seleccionado. |
| Datos de prueba | Nombre: `Horario QA Mauricio Diurno 2026-06-06` |
| Pasos | 1. Crear horario. 2. Guardarlo con nombre definido. 3. Confirmar mensaje o estado exitoso. |
| Resultado esperado | El horario queda guardado y disponible para cargar. |
| Resultado obtenido | El diálogo de guardado permitió registrar el horario con el nombre `Horario QA Mauricio Diurno 2026-06-06`. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-003-guardar-horario.png` |

### CP-M-004: Cargar horario guardado

| Campo | Valor |
|-------|-------|
| ID | CP-M-004 |
| Nombre | Cargar horario guardado |
| Objetivo | Verificar persistencia del horario después de recargar la página. |
| Requisito asociado | RF-M1 |
| Tipo | Sistema |
| Prioridad | Alta |
| Precondiciones | Existe un horario guardado. |
| Datos de prueba | `Horario QA Mauricio Diurno 2026-06-06` |
| Pasos | 1. Recargar página. 2. Abrir horarios guardados. 3. Cargar horario. 4. Verificar grupos en calendario. |
| Resultado esperado | El horario guardado se restaura correctamente. |
| Resultado obtenido | El horario guardado apareció en la lista de horarios con el nombre `Horario QA Mauricio Diurno 2026-06-06`. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-004-cargar-horario.png` |

### CP-M-005: Rendimiento del panel de resumen

| Campo | Valor |
|-------|-------|
| ID | CP-M-005 |
| Nombre | Rendimiento del panel de resumen |
| Objetivo | Medir el tiempo de carga del panel de resumen. |
| Requisito asociado | RNF-M1 |
| Tipo | Rendimiento |
| Prioridad | Alta |
| Precondiciones | Usuario autenticado. |
| Datos de prueba | Lighthouse en Chromium. |
| Pasos | 1. Abrir la ruta overview. 2. Ejecutar Lighthouse. 3. Registrar tiempo y puntuación. |
| Resultado esperado | Tiempo de carga menor a 2 segundos. |
| Resultado obtenido | La traza de Performance registró LCP de 1633 ms y CLS de 0.04 en la ruta overview. Lighthouse registró accesibilidad 100, buenas prácticas 100 y SEO 66. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/reportes/performance-overview.json`, `evidencias/reportes/lighthouse-overview.html` |

### CP-M-006: Selección inválida o conflicto de horario

| Campo | Valor |
|-------|-------|
| ID | CP-M-006 |
| Nombre | Selección inválida o conflicto de horario |
| Objetivo | Verificar comportamiento ante selección inválida o conflicto. |
| Requisito asociado | RF-M1 |
| Tipo | Negativo |
| Prioridad | Media |
| Precondiciones | Usuario en la ruta schedule. |
| Datos de prueba | Dos grupos con posible traslape si están disponibles. |
| Pasos | 1. Seleccionar grupo. 2. Intentar seleccionar grupo conflictivo o acción inválida. 3. Observar respuesta. |
| Resultado esperado | La app informa el conflicto o evita estado inconsistente. |
| Resultado obtenido | Al tener seleccionado `MA0101-01`, grupos con traslape en martes o jueves por la mañana aparecieron deshabilitados, evitando un estado inconsistente. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-006-conflicto.png` |

### CP-M-007: Carga ligera en ruta principal

| Campo | Valor |
|-------|-------|
| ID | CP-M-007 |
| Nombre | Carga ligera en ruta principal |
| Objetivo | Evaluar respuesta básica de una ruta principal ante usuarios concurrentes. |
| Requisito asociado | RNF-M1 |
| Tipo | Carga |
| Prioridad | Media |
| Precondiciones | Aplicación disponible y usuario demo válido. |
| Datos de prueba | 30 solicitudes con concurrencia 3 mediante ApacheBench. |
| Pasos | 1. Ejecutar ApacheBench contra overview. 2. Registrar tiempo medio, errores y throughput. |
| Resultado esperado | No se observan errores críticos y el tiempo medio se mantiene documentado dentro del umbral definido por el equipo. |
| Resultado obtenido | Se completaron 30 solicitudes, 0 fallidas, 7.46 solicitudes por segundo y tiempo medio total de 402.189 ms por solicitud. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/reportes/apachebench-overview.txt` |

### CP-M-008: Prueba unitaria de lógica de horarios

| Campo | Valor |
|-------|-------|
| ID | CP-M-008 |
| Nombre | Prueba unitaria de lógica de horarios |
| Objetivo | Verificar lógica utilitaria relacionada con calendario u horarios. |
| Requisito asociado | RF-M1 |
| Tipo | Unitario |
| Prioridad | Media |
| Precondiciones | Dependencias instaladas en el repositorio de Claustrum. |
| Datos de prueba | Función utilitaria seleccionada de calendario u horarios. |
| Pasos | 1. Seleccionar función crítica. 2. Crear prueba con Vitest. 3. Ejecutar prueba. 4. Registrar resultado. |
| Resultado esperado | La prueba unitaria pasa y documenta el comportamiento esperado. |
| Resultado obtenido | Vitest ejecutó 4 pruebas unitarias sobre utilidades de calendario y todas pasaron. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/reportes/vitest-horarios.txt` |

### CP-M-009: Aceptación de usuario del creador de horarios

| Campo | Valor |
|-------|-------|
| ID | CP-M-009 |
| Nombre | Aceptación de usuario del creador de horarios |
| Objetivo | Validar que el flujo de creación de horario cumple una tarea completa de usuario. |
| Requisito asociado | RF-M1 |
| Tipo | UAT |
| Prioridad | Alta |
| Precondiciones | Usuario autenticado y cursos disponibles. |
| Datos de prueba | Primer curso y grupo disponible. |
| Pasos | 1. Entrar a la ruta schedule. 2. Agregar grupo. 3. Guardar horario. 4. Confirmar que el usuario puede reutilizarlo. |
| Resultado esperado | El usuario completa el flujo sin instrucciones externas ni errores bloqueantes. |
| Resultado obtenido | El flujo principal permitió entrar a schedule, agregar un grupo diurno, guardar el horario y verificar que quedó disponible para reutilizarlo sin errores bloqueantes. La automatización Playwright del flujo finalizó con 1 prueba aprobada. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/mauricio/CP-M-009-uat-horario.png`, `evidencias/reportes/playwright-mauricio.json`, `evidencias/reportes/playwright-mauricio-html/` |

## Isaac: ruta professors y API de reseñas

### CP-I-001: Buscar profesor

| Campo | Valor |
|-------|-------|
| ID | CP-I-001 |
| Nombre | Buscar profesor |
| Objetivo | Verificar búsqueda y acceso al detalle de profesor. |
| Requisito asociado | RF-I1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Usuario autenticado o acceso permitido al módulo. |
| Datos de prueba | Primer profesor visible en la lista. |
| Pasos | 1. Abrir la ruta professors. 2. Buscar o seleccionar profesor. 3. Abrir detalle. |
| Resultado esperado | Se muestra la página de detalle del profesor. |
| Resultado obtenido | Se abrió correctamente la página de detalle del profesor `CORDERO QUIROS MARCIAL` en la ruta `/professors/480`. La vista mostró métricas generales, etiquetas destacadas y la sección de reseñas del profesor. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/isaac/CP-I-001-buscar-profesor.png` |

### CP-I-002: Consultar reseñas existentes

| Campo | Valor |
|-------|-------|
| ID | CP-I-002 |
| Nombre | Consultar reseñas existentes |
| Objetivo | Verificar visualización de reseñas existentes. |
| Requisito asociado | RF-I1 |
| Tipo | Funcional |
| Prioridad | Media |
| Precondiciones | Profesor con página de detalle disponible. |
| Datos de prueba | Primer profesor visible. |
| Pasos | 1. Abrir detalle. 2. Ubicar sección de reseñas. 3. Verificar lista o estado vacío. |
| Resultado esperado | Se muestran reseñas o mensaje claro si no existen. |
| Resultado obtenido | En la página de detalle del profesor `CORDERO QUIROS MARCIAL` se mostraron reseñas existentes con fecha, curso asociado, calificaciones de facilidad y calidad, etiquetas, comentario y opciones de interacción como votar o reportar. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/isaac/CP-I-002-consultar-resenas.png` |

### CP-I-003: Enviar reseña válida

| Campo | Valor |
|-------|-------|
| ID | CP-I-003 |
| Nombre | Enviar reseña válida |
| Objetivo | Verificar envío de reseña con datos válidos. |
| Requisito asociado | RF-I1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Profesor seleccionado y formulario disponible. |
| Datos de prueba | `El profesor explica con claridad y responde preguntas durante la clase.` |
| Pasos | 1. Abrir formulario. 2. Completar campos obligatorios. 3. Enviar. 4. Verificar respuesta. |
| Resultado esperado | La reseña se envía o queda pendiente con mensaje claro. |
| Resultado obtenido | Al completar el formulario de reseña para `CORDERO QUIROS MARCIAL` con curso, calificación obtenida, comentario válido, calificaciones numéricas, asistencia obligatoria y etiqueta seleccionada, la aplicación rechazó el envío y mostró el mensaje `Invalid review payload`. |
| Estado | Ejecutado |
| Resultado | Fallido |
| Evidencia | `evidencias/isaac/CP-I-003-enviar-resena.png` |

### CP-I-004: Campos obligatorios vacíos

| Campo | Valor |
|-------|-------|
| ID | CP-I-004 |
| Nombre | Campos obligatorios vacíos |
| Objetivo | Validar que el formulario rechaza campos obligatorios vacíos. |
| Requisito asociado | RF-I1 |
| Tipo | Negativo |
| Prioridad | Alta |
| Precondiciones | Formulario de reseña abierto. |
| Datos de prueba | Campos vacíos. |
| Pasos | 1. Abrir formulario. 2. Dejar campos obligatorios vacíos. 3. Enviar. |
| Resultado esperado | La app muestra validaciones y no envía la reseña. |
| Resultado obtenido | Al intentar enviar una reseña sin seleccionar curso y sin completar el comentario, la aplicación rechazó el envío y mostró el mensaje `Revisa los datos del formulario y vuelve a intentar.` |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/isaac/CP-I-004-campos-vacios.png` |

### CP-I-005: Intento de XSS

| Campo | Valor |
|-------|-------|
| ID | CP-I-005 |
| Nombre | Intento de XSS |
| Objetivo | Verificar que una entrada XSS no se ejecuta. |
| Requisito asociado | RNF-I1 |
| Tipo | Seguridad |
| Prioridad | Alta |
| Precondiciones | Formulario de reseña disponible. |
| Datos de prueba | `<script>alert('xss')</script>` |
| Pasos | 1. Insertar payload en comentario. 2. Enviar o previsualizar. 3. Observar respuesta. |
| Resultado esperado | El payload se bloquea, sanitiza o no se ejecuta. |
| Resultado obtenido | Al ingresar el payload `<script>alert('xss')</script>` en el comentario de la reseña, la aplicación rechazó el envío con el mensaje `Invalid review payload`. No se ejecutó ningún script ni apareció una alerta en el navegador. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/isaac/CP-I-005-xss.png` |

### CP-I-006: API de reseñas

| Campo | Valor |
|-------|-------|
| ID | CP-I-006 |
| Nombre | API de reseñas |
| Objetivo | Verificar endpoint principal de reseñas mediante Postman/Newman. |
| Requisito asociado | RF-I1, RNF-I1 |
| Tipo | API |
| Prioridad | Alta |
| Precondiciones | Colección Postman configurada. |
| Datos de prueba | Payload válido y payload inválido. |
| Pasos | 1. Ejecutar colección. 2. Validar códigos HTTP. 3. Exportar reporte Newman. |
| Resultado esperado | Respuestas coherentes para entradas válidas e inválidas. |
| Resultado obtenido | La colección Newman ejecutó 4 solicitudes contra los endpoints reales de Supabase RPC del módulo de reseñas. Se validó el resumen de reseñas del profesor 480, la consulta de reseñas públicas aprobadas, una entrada tipo SQL Injection y una entrada tipo XSS. Las 4 solicitudes respondieron 200 OK, se ejecutaron 14 aserciones y no se registraron fallos. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | evidencias/reportes/newman-professor-reviews.txt, evidencias/reportes/newman-professor-reviews.json |

### CP-I-007: Aceptación de usuario del flujo de reseñas

| Campo | Valor |
|-------|-------|
| ID | CP-I-007 |
| Nombre | Aceptación de usuario del flujo de reseñas |
| Objetivo | Validar que el flujo de consulta y envío de reseña es comprensible para un usuario. |
| Requisito asociado | RF-I1 |
| Tipo | UAT |
| Prioridad | Media |
| Precondiciones | Profesor con página de detalle disponible. |
| Datos de prueba | Primer profesor visible y texto válido de reseña. |
| Pasos | 1. Buscar profesor. 2. Abrir detalle. 3. Identificar reseñas. 4. Completar formulario de reseña. 5. Verificar respuesta. |
| Resultado esperado | El flujo se completa con mensajes claros y sin ambigüedad para el usuario. |
| Resultado obtenido | El usuario puede abrir la ruta professors, consultar el detalle del profesor `CORDERO QUIROS MARCIAL`, identificar las reseñas existentes y acceder al formulario mediante `Escribir reseña`. Sin embargo, al completar una reseña con datos válidos, la aplicación rechaza el envío con el mensaje `Invalid review payload`, por lo que el flujo de aceptación no se completa exitosamente. |
| Estado | Ejecutado |
| Resultado | Fallido |
| Evidencia | `evidencias/isaac/CP-I-007-uat-resenas.png`, `evidencias/isaac/CP-I-007-playwright-formulario.png`, `evidencias/reportes/playwright-isaac.json`, `evidencias/reportes/playwright-isaac-html/` |

### CP-I-008: Intento de SQL Injection

| Campo | Valor |
|-------|-------|
| ID | CP-I-008 |
| Nombre | Intento de SQL Injection |
| Objetivo | Verificar que el módulo de reseñas no permite manipulación mediante entradas tipo SQL Injection. |
| Requisito asociado | RNF-I1 |
| Tipo | Seguridad |
| Prioridad | Alta |
| Precondiciones | Ruta professors o endpoint de reseñas disponible. |
| Datos de prueba | `' OR '1'='1` |
| Pasos | 1. Insertar el payload en campos de búsqueda o parámetros disponibles. 2. Enviar la solicitud. 3. Observar respuesta y comportamiento. |
| Resultado esperado | La aplicación rechaza, escapa o trata la entrada como texto; no muestra datos no autorizados ni errores SQL. |
| Resultado obtenido | Al ingresar el payload `' OR '1'='1` en el buscador del módulo professors, la aplicación trató la entrada como texto de búsqueda, no mostró errores SQL, no expuso datos no autorizados y respondió con el mensaje `No hay resultados para los filtros seleccionados.` |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/isaac/CP-I-008-sql-injection.png` |

## Armando: rutas auth, onboarding y curriculum

### CP-A-001: Login válido

| Campo | Valor |
|-------|-------|
| ID | CP-A-001 |
| Nombre | Login válido |
| Objetivo | Verificar inicio de sesión con credenciales válidas. |
| Requisito asociado | RF-A1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Usuario demo existente. |
| Datos de prueba | `demo@demo.com` / `pruebas1234` |
| Pasos | 1. Abrir login. 2. Ingresar credenciales válidas. 3. Enviar formulario. |
| Resultado esperado | El usuario accede a la aplicación autenticada. |
| Resultado obtenido | La aplicación permite acceder con credenciales válidas. |
| Estado | Ejecutado |
| Resultado | Aprobado |
| Evidencia | `evidencias/armando/CP-A-001-login-valido.png` |

### CP-A-002: Login inválido

| Campo | Valor |
|-------|-------|
| ID | CP-A-002 |
| Nombre | Login inválido |
| Objetivo | Verificar rechazo de credenciales inválidas. |
| Requisito asociado | RF-A1 |
| Tipo | Negativo |
| Prioridad | Alta |
| Precondiciones | Página de login disponible. |
| Datos de prueba | `demo@demo.com` / `123` |
| Pasos | 1. Abrir login. 2. Ingresar credenciales inválidas. 3. Enviar formulario. |
| Resultado esperado | La app rechaza el inicio de sesión y muestra mensaje claro. |
| Resultado obtenido | Despliega un error: "No se pudo iniciar sesión, el correo electrónico no tiene un formato válido." |
| Estado | Ejecutado |
| Resultado | Aceptado con defecto |
| Evidencia | `evidencias/armando/CP-A-002-login-invalido.png` |

### CP-A-003: Onboarding académico

| Campo | Valor |
|-------|-------|
| ID | CP-A-003 |
| Nombre | Onboarding académico |
| Objetivo | Verificar configuración académica inicial o su estado ya completado. |
| Requisito asociado | RF-A1 |
| Tipo | Integración |
| Prioridad | Alta |
| Precondiciones | Usuario autenticado. |
| Datos de prueba | Primera universidad, campus, carrera y plan disponibles si aparece onboarding. |
| Pasos | 1. Iniciar sesión. 2. Si aparece onboarding, completarlo. 3. Si no aparece, verificar redirección válida. |
| Resultado esperado | El usuario queda dentro de la aplicación con contexto académico válido. |
| Resultado obtenido | El usuario de demo@demo.com ya se encuentra con el onboarding completado. La redirección se ejecutó correctamente. |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/armando/CP-A-003-onboarding.png` |

### CP-A-004: Detalle de curso en la malla curricular

| Campo | Valor |
|-------|-------|
| ID | CP-A-004 |
| Nombre | Detalle de curso en la malla curricular |
| Objetivo | Verificar navegación desde la malla curricular al detalle de un curso. |
| Requisito asociado | RNF-A1 |
| Tipo | Funcional |
| Prioridad | Alta |
| Precondiciones | Usuario autenticado con plan de estudios. |
| Datos de prueba | Primer curso visible en la ruta curriculum. |
| Pasos | 1. Abrir la ruta curriculum. 2. Seleccionar primer curso visible. 3. Verificar detalle. |
| Resultado esperado | Se muestra información del curso seleccionado. |
| Resultado obtenido | Los cursos muestran correctamente los créditos, horas y el semestre al que corresponde. |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/armando/CP-A-004-detalle-curso.png` |

### CP-A-005: Navegación en máximo 3 clics

| Campo | Valor |
|-------|-------|
| ID | CP-A-005 |
| Nombre | Navegación en máximo 3 clics |
| Objetivo | Verificar acceso a secciones principales en máximo 3 clics. |
| Requisito asociado | RNF-A1 |
| Tipo | Usabilidad |
| Prioridad | Media |
| Precondiciones | Usuario autenticado. |
| Datos de prueba | Ruta overview, ruta schedule, ruta curriculum y ruta professors. |
| Pasos | 1. Desde aplicación autenticada, contar clics hacia cada sección. 2. Registrar resultados. |
| Resultado esperado | Cada sección se alcanza en máximo 3 clics. |
| Resultado obtenido | Ninguna sección se excedió de los 3 clics.  |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/armando/CP-A-005-navegacion.png` |

### CP-A-006: Accesibilidad en la malla curricular

| Campo | Valor |
|-------|-------|
| ID | CP-A-006 |
| Nombre | Accesibilidad en la malla curricular |
| Objetivo | Medir accesibilidad básica de la ruta curriculum. |
| Requisito asociado | RNF-A1 |
| Tipo | Accesibilidad |
| Prioridad | Media |
| Precondiciones | Usuario autenticado y ruta curriculum abierta. |
| Datos de prueba | Lighthouse en Chromium. |
| Pasos | 1. Abrir la ruta curriculum. 2. Ejecutar Lighthouse. 3. Registrar puntuación. |
| Resultado esperado | Accesibilidad ≥ 90. |
| Resultado obtenido | La accesibilidad arroja un resultado de 94. |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/reportes/lighthouse-curriculum.html` |

### CP-A-007: Aceptación de usuario de navegación autenticada

| Campo | Valor |
|-------|-------|
| ID | CP-A-007 |
| Nombre | Aceptación de usuario de navegación autenticada |
| Objetivo | Validar que un usuario autenticado puede orientarse en las secciones principales. |
| Requisito asociado | RNF-A1 |
| Tipo | UAT |
| Prioridad | Media |
| Precondiciones | Usuario autenticado. |
| Datos de prueba | Ruta overview, ruta schedule, ruta curriculum y ruta professors. |
| Pasos | 1. Iniciar sesión. 2. Ir a cada sección principal desde la navegación. 3. Confirmar que cada destino es claro y alcanzable. |
| Resultado esperado | El usuario identifica y accede a las secciones principales sin confusión y en máximo 3 clics. |
| Resultado obtenido | Todas las rutas son accesibles dentro de los márgenes con un usuario autenticado. |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/armando/CP-A-007-uat-navegacion.png` |

### CP-A-008: Control de acceso sin sesión

| Campo | Valor |
|-------|-------|
| ID | CP-A-008 |
| Nombre | Control de acceso sin sesión |
| Objetivo | Verificar que las rutas protegidas no son accesibles sin una sesión válida. |
| Requisito asociado | RF-A1 |
| Tipo | Seguridad |
| Prioridad | Alta |
| Precondiciones | Navegador sin sesión activa. |
| Datos de prueba | Rutas overview, schedule, curriculum y settings. |
| Pasos | 1. Cerrar sesión o abrir navegador limpio. 2. Intentar acceder directamente a una ruta protegida. 3. Observar redirección o bloqueo. |
| Resultado esperado | La aplicación redirige al login o bloquea el acceso a contenido protegido. |
| Resultado obtenido | En rutas protegidas de /settings y en el inicio, se despliegan los bloqueos correctamente. |
| Estado | Ejecutado |
| Resultado | Aceptado |
| Evidencia | `evidencias/armando/CP-A-008-control-acceso.png` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Datos de prueba | Nombre: `Horario QA Mauricio` |
| Pasos | 1. Crear horario. 2. Guardarlo con nombre definido. 3. Confirmar mensaje o estado exitoso. |
| Resultado esperado | El horario queda guardado y disponible para cargar. |
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Datos de prueba | `Horario QA Mauricio` |
| Pasos | 1. Recargar página. 2. Abrir horarios guardados. 3. Cargar horario. 4. Verificar grupos en calendario. |
| Resultado esperado | El horario guardado se restaura correctamente. |
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/reportes/lighthouse-dashboard.html` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Datos de prueba | 10 usuarios concurrentes durante 1 minuto en JMeter. |
| Pasos | 1. Configurar plan de prueba en JMeter. 2. Ejecutar contra ruta overview o schedule. 3. Registrar tiempo medio, errores y throughput. |
| Resultado esperado | No se observan errores críticos y el tiempo medio se mantiene documentado dentro del umbral definido por el equipo. |
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/reportes/jmeter-ruta-principal.html` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/mauricio/CP-M-009-uat-horario.png` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/reportes/newman-professor-reviews.html` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/isaac/CP-I-007-uat-resenas.png` |

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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
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
| Resultado obtenido | Pendiente |
| Estado | Pendiente |
| Resultado | No ejecutado |
| Evidencia | `evidencias/armando/CP-A-008-control-acceso.png` |

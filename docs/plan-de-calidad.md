# Plan de Calidad

## 1. Objetivo

Ejecutar un proceso de aseguramiento de calidad sobre los módulos seleccionados de Claustrum, combinando pruebas estáticas, dinámicas, funcionales, no funcionales, gestión de defectos y métricas de calidad.

## 2. Alcance

### Incluye

| Módulo | Responsable | Pruebas principales |
|--------|-------------|---------------------|
| Ruta schedule: creador de horarios | Mauricio | Funcionales, integración, E2E, rendimiento indirecto |
| Ruta overview: panel de resumen | Mauricio | Rendimiento, usabilidad, validación visual |
| Ruta professors: reseñas de profesores | Isaac | Funcionales, API, seguridad, validaciones |
| Ruta auth: autenticación | Armando | Funcionales, seguridad, integración |
| Ruta onboarding: configuración inicial | Armando | Funcionales, integración |
| Ruta curriculum: malla curricular | Armando | Funcionales, usabilidad, accesibilidad |

### Excluye

| Módulo | Justificación |
|--------|---------------|
| Ruta evaluations: evaluaciones en PDF | Se excluye para reducir alcance por manejo de archivos y moderación. |
| Ruta moderation: moderación | Flujo administrativo no esencial para usuario estudiante. |
| Docs internas | Contenido estático fuera del flujo principal. |
| Policies | Páginas informativas. |
| CI/CD | Infraestructura, no funcionalidad de usuario. |
| Data pipeline Python | Herramienta interna, no usada directamente por usuarios. |

## 3. Requisitos seleccionados

| ID | Tipo | Descripción | Responsable |
|----|------|-------------|-------------|
| RF-M1 | Funcional | El usuario autenticado puede crear, guardar y cargar un horario académico. | Mauricio |
| RNF-M1 | No funcional | El panel de resumen debe cargar en menos de 2 segundos en una conexión normal. | Mauricio |
| RF-I1 | Funcional | El usuario puede consultar y enviar una reseña de profesor con los campos obligatorios. | Isaac |
| RNF-I1 | No funcional | El módulo de reseñas debe rechazar entradas maliciosas o inválidas. | Isaac |
| RF-A1 | Funcional | El usuario puede iniciar sesión y completar el onboarding académico. | Armando |
| RNF-A1 | No funcional | El usuario puede llegar a las rutas overview, schedule, curriculum y professors en máximo 3 clics desde la aplicación autenticada. | Armando |

## 4. Estrategia de pruebas

| Tipo de prueba | Herramienta | Responsable |
|----------------|-------------|-------------|
| Revisión de requisitos | Checklist manual | Todos |
| Revisión de código | oxlint + checklist manual | Todos |
| Pruebas unitarias | Vitest | Mauricio |
| Pruebas funcionales | Manual + Playwright | Todos |
| Pruebas de integración | Manual + Playwright | Mauricio, Armando |
| Pruebas de sistema | Manual + Playwright | Todos |
| Pruebas de aceptación de usuario | Checklist manual | Todos |
| Pruebas de API | Postman + Newman | Isaac |
| Pruebas de seguridad | Manual + Postman | Isaac, Armando |
| Pruebas de rendimiento | Lighthouse + Performance | Mauricio |
| Pruebas de carga | ApacheBench | Mauricio |
| Pruebas de usabilidad | Checklist manual + Lighthouse | Armando |

## 5. Recursos necesarios

| Recurso | Uso |
|---------|-----|
| Usuario demo | Ejecución de flujos autenticados. |
| Código fuente local | Revisión estática, mantenibilidad y deuda técnica. |
| Navegador Chromium | Ejecución de pruebas E2E y Lighthouse. |
| Evidencias en PNG, HTML y JSON | Respaldo de resultados y defectos. |
| GitHub del proyecto | Seguimiento de tareas y versionamiento de documentos. |

## 6. Métricas y criterios de aceptación

| Métrica | Aceptación total | Aceptación parcial | Rechazo |
|---------|------------------|--------------------|---------|
| Complejidad ciclomática | ≤ 10 | 11-15 | > 15 |
| Duplicación observable | < 3 % | 3-8 % | > 8 % |
| Cobertura en archivos probados | ≥ 70 % | 50-69 % | < 50 % |
| Tiempo de carga del panel de resumen | < 2 s | 2-4 s | > 4 s |
| Accesibilidad Lighthouse | ≥ 90 | 70-89 | < 70 |
| Flujos E2E críticos | Todos pasan | Falla menor documentada | Falla bloqueante |
| Seguridad de entradas | Bloquea o sanitiza | Acepta sin ejecutar payload | Ejecuta payload |

### Diseño detallado de métricas

| Métrica | Objetivo | Fórmula | Unidad | Herramienta | Método | Frecuencia | Justificación | Umbral |
|---------|----------|---------|--------|-------------|--------|------------|---------------|--------|
| Complejidad ciclomática | Evaluar facilidad de mantenimiento en funciones críticas. | Número de caminos independientes por función. | Puntos de complejidad | Revisión manual del código | Revisar funciones seleccionadas en archivos críticos. | Una vez durante revisión estática | Funciones complejas elevan riesgo de defectos. | Aceptación total si es ≤ 10. |
| Duplicación observable | Identificar deuda técnica por repetición de lógica. | Líneas duplicadas estimadas / líneas revisadas * 100. | Porcentaje | Revisión manual | Comparar fragmentos similares en módulos asignados. | Una vez durante revisión estática | La duplicación dificulta mantenimiento. | Aceptación total si es < 3 %. |
| Cobertura de pruebas unitarias | Medir respaldo automatizado de lógica aislada. | Líneas cubiertas / líneas instrumentadas * 100. | Porcentaje | Vitest | Ejecutar pruebas unitarias con cobertura cuando aplique. | Una vez por ejecución final | Aumenta confianza ante cambios. | Aceptación total si es ≥ 70 %. |
| Tiempo de carga del panel de resumen | Validar rendimiento perceptible para el usuario. | Tiempo desde carga hasta vista utilizable. | Segundos | Lighthouse | Ejecutar medición en Chromium. | Una vez por ejecución final | Un panel lento reduce usabilidad. | Aceptación total si es < 2 s. |
| Accesibilidad | Evaluar cumplimiento básico de accesibilidad. | Puntuación Lighthouse. | Puntos de 0 a 100 | Lighthouse | Ejecutar auditoría en vista seleccionada. | Una vez por ejecución final | Mejora facilidad de uso y navegación. | Aceptación total si es ≥ 90. |
| Seguridad de entradas | Validar que entradas maliciosas no se ejecuten. | Casos de seguridad aprobados / casos ejecutados * 100. | Porcentaje | Manual + Postman | Ejecutar payload XSS y entradas inválidas. | Una vez por ejecución final | Reduce riesgo de vulnerabilidades visibles. | Aceptación total si todos los casos pasan. |

## 7. Estrategia de automatización

| Automatización | Herramienta | Responsable | Alcance |
|----------------|-------------|-------------|---------|
| Flujo autenticado hacia ruta schedule | Playwright | Mauricio | Iniciar sesión, abrir creador de horarios y guardar selección. |
| API de reseñas | Newman | Isaac | Ejecutar payload válido, payload inválido y payload XSS. |
| Flujo autenticado hacia ruta curriculum | Playwright | Armando | Iniciar sesión, abrir malla curricular y consultar detalle de curso. |

## 8. Riesgos

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Tiempo limitado para automatizar | Alto | Automatizar solo flujos críticos. |
| Datos reales variables | Medio | Usar primer dato disponible y documentarlo. |
| Dependencia de autenticación | Medio | Usar usuario demo definido. |
| Herramientas con cobertura parcial | Medio | Complementar con revisión manual. |

## 9. Cronograma

| Hito | Fecha | Entregable |
|------|-------|------------|
| Hito 1 | 2 de junio | Plan, documentos base y tareas listas. |
| Hito 2 | 7 de junio | Pruebas ejecutadas y defectos registrados. |
| Hito 3 | 11 de junio | Informe borrador completo. |
| Hito 4 | 14 de junio | Entrega final revisada. |

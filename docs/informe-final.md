# Informe Final

## Portada

**Proyecto:** Proyecto 01: Aseguramiento de la Calidad  
**Aplicación evaluada:** Claustrum  
**Curso:** IC6831 Aseguramiento de la calidad del software  
**Profesora:** Alicia Marcela Salazar Hernández  
**Integrantes:** Mauricio González, Isaac Jiménez, Armando Castro  
**Fecha de entrega:** 14 de junio

## 1. Introducción

Este informe presenta el proceso de aseguramiento de calidad aplicado a la aplicación web Claustrum, con énfasis en la ruta schedule, la ruta overview, la ruta professors, la ruta auth, la ruta onboarding y la ruta curriculum.

## 2. Objetivos

### Objetivo general

Ejecutar un proceso completo de aseguramiento de calidad sobre módulos seleccionados de una aplicación web real.

### Objetivos específicos

1. Analizar requisitos funcionales y no funcionales.
2. Diseñar y ejecutar pruebas estáticas y dinámicas.
3. Evaluar atributos de calidad mediante métricas definidas.
4. Documentar defectos y evidencias.
5. Formular recomendaciones basadas en resultados.

## 3. Descripción del sistema

Claustrum es una aplicación web orientada a estudiantes del Instituto Tecnológico de Costa Rica. Permite gestionar horarios, consultar la malla curricular, revisar información de cursos y profesores, y acceder a funciones de seguimiento académico.

## 4. Alcance

### Incluido

- Ruta schedule: creador de horarios
- Ruta overview: panel de resumen
- Ruta professors: reseñas de profesores
- Ruta auth: autenticación
- Ruta onboarding: configuración inicial
- Ruta curriculum: malla curricular

### Excluido

- Ruta evaluations: evaluaciones en PDF
- Ruta moderation: moderación
- Documentación interna
- Policies
- CI/CD
- Data pipeline Python

## 5. Metodología

Se aplicó una estrategia combinada de pruebas estáticas, dinámicas, funcionales, no funcionales, revisión manual, automatización parcial y gestión formal de defectos.

## 6. Herramientas utilizadas

| Herramienta | Uso |
|-------------|-----|
| oxlint | Análisis estático |
| Vitest | Pruebas unitarias |
| Playwright | Pruebas E2E |
| Postman/Newman | Pruebas API |
| Lighthouse | Rendimiento y accesibilidad |
| ApacheBench | Carga ligera sobre rutas principales |

## 7. Casos de prueba

- Se ejecutaron los casos `CP-M-001` a `CP-M-009` para las rutas schedule y overview. Los nueve casos fueron aprobados y cuentan con evidencia en capturas, reportes de herramientas y una ejecución Playwright aprobada.
- Se ejecutaron los casos `CP-A-001` a `CP-A-008` para las rutas auth, onboarding y curriculum. Siete casos fueron aprobados y `CP-A-002` falló por el defecto `DEF-A-001`; todo quedó documentado con capturas y trazabilidad.
- Se ejecutaron los casos `CP-I-001` a `CP-I-008` para la ruta professors y la API de reseñas. Se aprobaron los casos de búsqueda, consulta de reseñas, validación de campos vacíos, XSS, SQL Injection y API con Newman. Los casos de envío de reseña válida y aceptación de usuario fallaron por el defecto `DEF-I-001`.

## 8. Matriz de trazabilidad

- Los requisitos `RF-M1` y `RNF-M1` quedaron cubiertos por casos funcionales, integración, sistema, negativo, unitario, UAT, rendimiento y carga ligera. Ambos requisitos fueron aprobados en las pruebas ejecutadas a la fecha.
- Los requisitos `RF-A1` y `RNF-A1` quedaron cubiertos. `RF-A1` presenta un defecto menor documentado en el mensaje de login (`DEF-A-001`), pero el flujo principal de autenticación y onboarding se completó correctamente.
- El requisito `RF-I1` quedó cubierto por casos funcionales, negativos, API y UAT. El requisito queda fallido porque el envío de reseña válida no se completa correctamente.
- El requisito `RNF-I1` quedó cubierto por pruebas de seguridad y API. El requisito queda aprobado porque las entradas XSS y SQL Injection no se ejecutaron ni expusieron errores técnicos.


## 9. Gestión de defectos

Se documentaron dos defectos: `DEF-A-001`, referente al mensaje incorrecto de inicio de sesión, y `DEF-I-001`, referente al rechazo del envío de una reseña válida con `Invalid review payload`.

## 10. Resultados por módulo

### Ruta schedule: creador de horarios

Se accedió al creador de horarios con el usuario demo, se seleccionó el grupo `MA0101-01`, se visualizó en el calendario, se abrió el diálogo de guardado, se registró el horario como `Horario QA Mauricio Diurno 2026-06-06` y se verificó su aparición en la lista de horarios guardados. La aplicación también evitó conflictos de horario al deshabilitar grupos con traslape.

### Ruta overview: panel de resumen

La ruta overview cargó correctamente para el usuario autenticado. La traza de Performance registró LCP de 1633 ms y CLS de 0.04, cumpliendo el umbral definido para `RNF-M1`.

### Ruta professors: reseñas de profesores

La ruta professors permitió consultar la lista de profesores, abrir el detalle del profesor `CORDERO QUIROS MARCIAL` y visualizar métricas generales como calidad general, facilidad, calidad, porcentaje de estudiantes que lo llevarían otra vez, etiquetas destacadas y reseñas existentes. En la consulta de reseñas se observaron datos como fecha, curso asociado, comentario, calificaciones, etiquetas, estado aprobado y conteos de interacción.

El formulario de reseña se abrió correctamente desde el botón `Escribir reseña`. La aplicación rechazó adecuadamente el envío con campos obligatorios vacíos mediante el mensaje `Revisa los datos del formulario y vuelve a intentar.` También rechazó una entrada XSS con `<script>alert('xss')</script>` sin ejecutar ningún script en el navegador.

Sin embargo, al completar una reseña con datos válidos, la aplicación rechazó el envío con el mensaje `Invalid review payload`. Este comportamiento impide completar el flujo funcional de envío de reseña y afecta directamente el requisito `RF-I1`. El hallazgo se registró como `DEF-I-001`.

La API de reseñas se validó mediante Newman contra endpoints reales de Supabase RPC. Se ejecutaron 4 solicitudes y 14 aserciones sin fallos, cubriendo resumen de reseñas, reseñas públicas aprobadas, entrada SQL Injection y entrada XSS. La automatización Playwright verificó correctamente el inicio de sesión, acceso al detalle del profesor y apertura del formulario de reseña.

### Ruta auth: autenticación

La autenticación funcionó correctamente, utilizando el usuario de demo probando diferentes casos: correo correcto, contraseña incorrecta, ambos incorrectos. Se verificó la respuesta de la API; como hallazgo menor, la validación de credenciales inválidas devuelve un mensaje incorrecto sobre el formato del correo, documentado como `DEF-A-001`.

### Ruta onboarding: configuración inicial

La ruta de onboarding se verificó con el usuario de demo@demo.com, que ya se encuentra con el onboarding completado. La redirección se ejecutó correctamente.

### Ruta curriculum: malla curricular

Primeramente, Lighthouse devuelve 79 en performance, 94 en accesibilidad, 100 en mejores practicas y 100 en SEO, lo cual se considera un resultado satisfactorio. Con respecto a las pruebas realizadas, la ruta de curriculum devuelve correctamente los detalles de los cursos y cumple con los estandares de accesibilidad.

## 11. Métricas

| Métrica | Resultado | Estado |
|---------|-----------|--------|
| Complejidad ciclomática | Sin hallazgos bloqueantes en revisión estática de schedule, calendar y `calendar-utils.ts` | Aprobado para rutas evaluadas |
| Duplicación observable | No se detectó duplicación bloqueante en la revisión del alcance evaluado | Aprobado para rutas evaluadas |
| Cobertura de pruebas | 4 pruebas unitarias de lógica de calendario y 1 flujo Playwright aprobado | Aprobado para rutas evaluadas |
| Tiempo de carga del panel de resumen | LCP de 1633 ms en Performance | Aprobado |
| Accesibilidad Lighthouse | 100 en ruta overview | Aprobado |
| Seguridad de entradas | XSS y SQL Injection rechazados o tratados como texto; Newman ejecutó 14 aserciones sin fallos | Aprobado |

## 12. Evaluación de deuda técnica

En las pruebas actuales no se observaron defectos bloqueantes. La revisión estática con oxlint no reportó hallazgos en los componentes schedule, calendar ni en `calendar-utils.ts`. Como deuda técnica potencial queda revisar oportunidades de optimización de renderizado, ya que la traza atribuye la mayor parte del LCP a demora de renderizado. También quedó pendiente mejorar el mensaje de validación de login y la validación del formulario de reseñas.

Para el módulo professors no se contó con acceso directo al código fuente de Claustrum, por lo que la revisión estática se limitó a los artefactos disponibles en el repositorio QA, la colección Newman, los reportes generados y el comportamiento observable de la aplicación desplegada. Como deuda técnica funcional se identifica la necesidad de mejorar la validación del formulario de reseñas, ya que el mensaje `Invalid review payload` no indica el campo específico que causa el rechazo.

## 13. Análisis de riesgos

El riesgo principal es depender de datos externos o cambiantes del periodo académico: si cambian cursos, grupos o disponibilidad, las pruebas E2E pueden requerir actualización de datos. También existe riesgo de que el flujo de guardado dependa del usuario demo y de horarios previamente almacenados.

En la ruta professors existe el riesgo de que el flujo de envío de reseñas no pueda ser utilizado por estudiantes aunque el formulario permita completar datos válidos. También existe riesgo de mantenibilidad en las pruebas API si cambian los endpoints RPC de Supabase o los nombres de parámetros utilizados por la aplicación.

## 14. Análisis de resultados

Los resultados muestran que el flujo principal del creador de horarios funciona de forma estable para usuario autenticado. La persistencia de horarios se validó manualmente, la lógica de calendario se cubrió con pruebas unitarias y la ruta overview cumplió el objetivo de carga observado.

En el módulo professors, los resultados muestran que la consulta de información y reseñas funciona correctamente, pero el envío de reseñas presenta un fallo funcional. Las pruebas de seguridad no evidenciaron ejecución de XSS, exposición de errores SQL ni errores internos ante entradas maliciosas. La API pública de consulta respondió correctamente a las pruebas automatizadas con Newman.

## 15. Conclusiones

En las pruebas ejecutadas a la fecha, Claustrum cumple los requisitos evaluados de horarios y rendimiento del panel de resumen. La autenticación y el onboarding funcionan, aunque existe un defecto menor documentado en el mensaje de login.

Para la ruta professors, Claustrum cumple parcialmente el requisito funcional evaluado. La consulta de profesores y reseñas funciona, pero el envío de una reseña válida no se completa debido al error `Invalid review payload`. El requisito no funcional de seguridad de entradas se considera aprobado para los escenarios probados, ya que no se ejecutaron payloads XSS ni se observaron errores SQL expuestos.

## 16. Recomendaciones

Mantener datos de prueba estables para automatización E2E, ejecutar periódicamente la traza de Performance en overview y revisar la demora de renderizado detectada en el desglose de LCP.

Corregir la validación del envío de reseñas para que los datos válidos sean aceptados o queden pendientes de aprobación. Además, reemplazar el mensaje genérico `Invalid review payload` por mensajes específicos por campo, de modo que el usuario pueda identificar si el problema está en curso, periodo, comentario, calificaciones, etiquetas u otro dato requerido. Mantener la colección Newman actualizada con los endpoints reales de Supabase RPC utilizados por la aplicación.

## 17. Anexos

- Evidencias de ejecución.
- Reportes de herramientas.
- Capturas de pantalla.

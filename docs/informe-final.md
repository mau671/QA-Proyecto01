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
- Se ejecutaron los casos `CP-A-001` a `CP-A-008` para las rutas auth, onboarding y curriculum. Los casos fueron aprobados, solo uno tuvo un defecto menor de error y todo se documentó con capturas.

## 8. Matriz de trazabilidad

- Los requisitos `RF-M1` y `RNF-M1` quedaron cubiertos por casos funcionales, integración, sistema, negativo, unitario, UAT, rendimiento y carga ligera. Ambos requisitos fueron aprobados en las pruebas ejecutadas a la fecha.
- Los requisitos `RF-A1` y `RNF-A1` quedaron cubiertos. Ambos requisitos quedan aprobados en las pruebas ejecutadas anteriormente.

## 9. Gestión de defectos

Se encuentra un defecto muy leve en la descripción de un error en `defectos.md`.

## 10. Resultados por módulo

### Ruta schedule: creador de horarios

Se accedió al creador de horarios con el usuario demo, se seleccionó el grupo `MA0101-01`, se visualizó en el calendario, se abrió el diálogo de guardado, se registró el horario como `Horario QA Mauricio Diurno 2026-06-06` y se verificó su aparición en la lista de horarios guardados. La aplicación también evitó conflictos de horario al deshabilitar grupos con traslape.

### Ruta overview: panel de resumen

La ruta overview cargó correctamente para el usuario autenticado. La traza de Performance registró LCP de 1633 ms y CLS de 0.04, cumpliendo el umbral definido para `RNF-M1`.

### Ruta professors: reseñas de profesores

Pendiente.

### Ruta auth: autenticación

La autenticación funcionó correctamente, utilizando el usuario de demo probando diferentes casos: correo correcto, contraseña incorrecta, ambos incorrectos. Se verificó la respuesta de la API y devuelve correcta y descriptivamente los errores.

### Ruta onboarding: configuración inicial

La ruta de onboarding se verificó con el usuario de demo@demo.com, que ya se encuentra con el onboarding completado. La redirección se ejecutó correctamente.

### Ruta curriculum: malla curricular

Primeramente, Lighthouse devuelve 79 en performance, 94 en accesibilidad, 100 en mejores practicas y 100 en SEO, lo cual se consideran resultados satisfactorios. Con respecto a las pruebas realizadas, la ruta de curriculum devuelve correctamente los detalles de los cursos y cumplie con los estandares de accesibilidad.

## 11. Métricas

| Métrica | Resultado | Estado |
|---------|-----------|--------|
| Complejidad ciclomática | Sin hallazgos bloqueantes en revisión estática de schedule, calendar y `calendar-utils.ts` | Aprobado para rutas evaluadas |
| Duplicación observable | No se detectó duplicación bloqueante en la revisión del alcance evaluado | Aprobado para rutas evaluadas |
| Cobertura de pruebas | 4 pruebas unitarias de lógica de calendario y 1 flujo Playwright aprobado | Aprobado para rutas evaluadas |
| Tiempo de carga del panel de resumen | LCP de 1633 ms en Performance | Aprobado |
| Accesibilidad Lighthouse | 100 en ruta overview | Aprobado |
| Seguridad de entradas | Pendiente | Pendiente |

## 12. Evaluación de deuda técnica

En las pruebas actuales no se observaron defectos bloqueantes. La revisión estática con oxlint no reportó hallazgos en los componentes schedule, calendar ni en `calendar-utils.ts`. Como deuda técnica potencial queda revisar oportunidades de optimización de renderizado, ya que la traza atribuye la mayor parte del LCP a demora de renderizado.

## 13. Análisis de riesgos

El riesgo principal es depender de datos externos o cambiantes del periodo académico: si cambian cursos, grupos o disponibilidad, las pruebas E2E pueden requerir actualización de datos. También existe riesgo de que el flujo de guardado dependa del usuario demo y de horarios previamente almacenados.

## 14. Análisis de resultados

Los resultados muestran que el flujo principal del creador de horarios funciona de forma estable para usuario autenticado. La persistencia de horarios se validó manualmente, la lógica de calendario se cubrió con pruebas unitarias y la ruta overview cumplió el objetivo de carga observado.

## 15. Conclusiones

En las pruebas ejecutadas a la fecha, Claustrum cumple los requisitos evaluados: creación, guardado y carga de horarios, manejo preventivo de conflictos y carga aceptable del panel de resumen.

## 16. Recomendaciones

Mantener datos de prueba estables para automatización E2E, ejecutar periódicamente la traza de Performance en overview y revisar la demora de renderizado detectada en el desglose de LCP.

## 17. Anexos

- Evidencias de ejecución.
- Reportes de herramientas.
- Capturas de pantalla.

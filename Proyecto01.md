# Proyecto Integrado de Auditoría y Validación de Sistemas de Información

## Descripción

Ejecutar un proceso completo de aseguramiento de la calidad en una aplicación web real, combinando auditorías estáticas y dinámicas, pruebas funcionales y no funcionales, aplicando metodologías V&V (verificación y validación), herramientas automatizadas y principios de modelos de calidad.

El proyecto combina:

* Auditorías estáticas
* Pruebas dinámicas
* Evaluación de atributos de calidad
* Gestión de defectos
* Automatización
* Métricas de calidad
* Análisis técnico y recomendaciones

## Objetivo General

Ejecutar un proceso completo de aseguramiento de la calidad en una aplicación web real.

## Objetivos Específicos

Al finalizar el proyecto, el estudiante será capaz de:

1. Analizar requerimientos funcionales y no funcionales de un sistema de información.
2. Diseñar y ejecutar pruebas estáticas y dinámicas.
3. Aplicar técnicas de verificación y validación de software.
4. Evaluar atributos de calidad utilizando modelos reconocidos.
5. Diseñar métricas cuantitativas de calidad.
6. Detectar y documentar defectos de software.
7. Automatizar pruebas utilizando herramientas profesionales.
8. Analizar deuda técnica y mantenibilidad.
9. Elaborar reportes técnicos de calidad.
10. Formular recomendaciones de mejora basadas en evidencia.

## Selección del Proyecto

Cada equipo seleccionará una aplicación web ya desarrollada, propia o de uso público, que cuente con:

* Documentación técnica
* Requerimientos funcionales y no funcionales
* Acceso a la aplicación
* Perfiles de usuarios

Debe indicarse:

* Naturaleza de la aplicación
* Población meta
* Fuente del proyecto
* Tecnologías utilizadas
* URL de acceso
* Credenciales de usuario, si aplica

La aplicación seleccionada debe contar con:

* Acceso funcional a la aplicación
* Requerimientos funcionales identificables
* Requerimientos no funcionales identificables
* Múltiples perfiles de usuario, si aplica
* Flujo funcional completo
* Persistencia de datos
* Navegación web funcional

## Alcance del Proyecto

Cada equipo deberá definir claramente:

### Lo que Incluye

* Módulos auditados
* Funcionalidades evaluadas
* Interfaces incluidas
* APIs incluidas

### Lo que Excluye

* Módulos no evaluados
* Servicios de terceros
* Infraestructura externa
* Sistemas externos integrados

## Plan de Pruebas Completas

### Plan General de Calidad

Cada equipo deberá elaborar un Plan General de Calidad que incluya:

#### Elementos mínimos

* Objetivos de calidad
* Estrategia de pruebas
* Tipos de pruebas
* Riesgos identificados
* Recursos necesarios
* Cronograma
* Roles y responsabilidades
* Herramientas
* Métricas
* Criterios de aceptación
* Estrategia de automatización

## Tipos de Pruebas a Realizar

### Pruebas Estáticas

#### Revisión de Requerimientos

* Ambigüedad
* Completitud
* Consistencia
* Trazabilidad
* Correctitud

#### Revisión de Código

* Legibilidad
* Modularidad
* Duplicación
* Complejidad
* Convenciones
* Código muerto

#### Evaluación de Mantenibilidad

* Acoplamiento
* Cohesión
* Complejidad ciclomática
* Reutilización
* Facilidad de modificación

#### Evaluación de Deuda Técnica

* Código duplicado
* Código muerto
* Vulnerabilidades
* Smells
* Dependencias obsoletas

### Pruebas Dinámicas

* Pruebas unitarias
* Pruebas de integración
* Pruebas de sistema
* Pruebas de aceptación de usuario (UAT)
* Pruebas funcionales

#### Pruebas de Rendimiento

* Tiempo de respuesta
* Concurrencia
* Uso de recursos
* Throughput

#### Pruebas de Carga

#### Pruebas de Seguridad

* SQL Injection
* Control de acceso
* XSS
* Contraseñas

#### Pruebas de Usabilidad

* Facilidad de uso
* Navegación
* Accesibilidad
* Experiencia de usuario

## Diseño de Métricas y Criterios de Aceptación

Para cada atributo, se deben incluir los siguientes elementos obligatorios:

* Objetivo de la métrica
* Fórmula
* Unidad de medida
* Herramienta de medición
* Método de recolección
* Frecuencia
* Justificación
* Umbral de aceptación

Cada métrica debe definir los criterios de aceptación y establecer umbrales para:

* Aceptación total
* Aceptación parcial
* Rechazo

## Cobertura Mínima Obligatoria

Cada equipo debe realizar como mínimo:

* Casos funcionales
* Casos negativos
* Pruebas de integración
* Pruebas de rendimiento
* Pruebas de seguridad
* Pruebas de usabilidad
* Automatizaciones

## Casos de Prueba

Cada integrante del equipo debe diseñar todos los casos de prueba descritos anteriormente para al menos:

* 1 requerimiento funcional del sistema seleccionado
* 1 requerimiento no funcional del sistema seleccionado

Para cada tipo de prueba, deben realizarse los casos de prueba necesarios.

Los casos de prueba deben alinearse con los atributos de calidad seleccionados. Además, deben incluir los escenarios de prueba y los resultados esperados.

Cada caso debe incluir:

* ID
* Nombre
* Objetivo
* Requerimiento asociado
* Tipo de prueba
* Prioridad
* Precondiciones
* Datos de prueba
* Pasos
* Resultado esperado
* Resultado obtenido
* Estado
* Evidencia

## Matriz de Trazabilidad

Debe existir una matriz que relacione:

* Requerimiento
* Caso de prueba
* Tipo de prueba
* Resultado
* Defecto

## Defectos

Cada defecto deberá registrarse formalmente.

### Información mínima

* ID
* Título
* Descripción
* Severidad
* Prioridad
* Pasos para reproducir
* Resultado esperado
* Resultado actual
* Evidencia
* Estado
* Responsable

## Herramientas a Utilizar

Indicar herramientas automatizadas y manuales a utilizar.

### Ejemplos

* Estáticas: SonarQube, ESLint, etc.
* Dinámicas: JUnit, Postman, Selenium, JMeter, etc.
* Rendimiento: Apache JMeter
* Funcionales: Selenium, Cypress, Playwright
* API: Postman, Newman
* Etc.

## Informe Final

Debe incluir al menos:

* Portada
* Introducción
* Objetivos
* Descripción del sistema
* Alcance
* Metodología
* Plan de pruebas
* Herramientas utilizadas
* Casos de prueba
* Matriz de trazabilidad
* Gestión de defectos
* Resultados de ejecución
* Métricas
* Evaluación de deuda técnica
* Análisis de riesgos
* Análisis de resultados
* Conclusiones
* Recomendaciones
* Anexos

## Fechas Importantes

* Entrega del proyecto: 14 de junio

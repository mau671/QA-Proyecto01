# Proyecto 01

**Instituto Tecnológico de Costa Rica**  
Campus Tecnológico Central Cartago  
Escuela de Ingeniería en Computación

**Curso:** IC6831 Aseguramiento de la calidad del software  
**Profesora:** Alicia Marcela Salazar Hernández  
**Semestre:** I Semestre, 2026

## Integrantes

- Mauricio González Prendas: 2024143009 (líder)
- Isaac Jiménez Blanco: 2024202804
- Armando Castro Palma: 2023219038

## Aplicación web seleccionada: [Claustrum](https://claustrum.maugp.com/)

**Naturaleza de la aplicación:** Aplicación web que permite crear horarios en cada período de matrícula, consultar los detalles del plan de estudios de la carrera, la información de los cursos y el historial de grupos. También cuenta con una sección para escribir y leer reseñas de profesores.

**Población meta:** Estudiantes del Instituto Tecnológico de Costa Rica.

**Fuente del proyecto:** [https://github.com/mau671/claustrum](https://github.com/mau671/claustrum)

**Código para análisis:** se utiliza el repositorio fuente de Claustrum indicado anteriormente. Cada integrante puede clonarlo en su propio entorno local.

**Documentación técnica utilizada:** código fuente del repositorio, estructura de rutas, migraciones de base de datos, configuración de herramientas y documentación visible en la aplicación.

**Tecnologías utilizadas:**
- React y TypeScript para el frontend.
- TanStack Router y TanStack Query para rutas y estado de servidor.
- Tailwind CSS y componentes basados en Radix UI para la interfaz.
- Base de datos PostgreSQL en Supabase.
- Better Auth para autenticación.
- API en Cloudflare Workers para funcionalidades específicas como reseñas de profesores.

**URL de acceso:** [https://claustrum.maugp.com/](https://claustrum.maugp.com/)

**Credenciales de usuario (demo):**
- Usuario: `demo@demo.com`
- Contraseña: `pruebas1234`

## Alcance definitivo del proyecto

El alcance se redujo para evitar sobrecargar el proyecto y concentrar el trabajo en módulos con valor funcional, pruebas estáticas, pruebas dinámicas y evidencia medible.

### Módulos incluidos

| Módulo | Descripción | Responsable | Enfoque principal |
|--------|-------------|-------------|-------------------|
| Ruta schedule: creador de horarios | Creación, edición, guardado y exportación de horarios | Mauricio | Funcionalidad, integración, rendimiento |
| Ruta overview: panel de resumen | Resumen de progreso académico y datos principales del usuario | Mauricio | Rendimiento, usabilidad, datos visibles |
| Ruta professors: reseñas de profesores | Consulta y creación de reseñas de profesores | Isaac | API, seguridad, validaciones, usabilidad |
| Ruta auth: autenticación | Inicio de sesión, registro, sesión y controles básicos de acceso | Armando | Seguridad, integración, validación de formularios |
| Ruta onboarding: configuración inicial | Configuración académica inicial del usuario | Armando | Flujo funcional, integración con datos de usuario |
| Ruta curriculum: malla curricular | Visualización de malla curricular, cursos y detalles | Armando | Usabilidad, navegación, consistencia de información |

### Módulos excluidos

| Módulo | Razón |
|--------|-------|
| Ruta evaluations: evaluaciones en PDF | Se excluye para reducir carga; implica manejo de archivos PDF, almacenamiento y moderación adicional. |
| Ruta moderation: moderación | Panel administrativo fuera del flujo principal del usuario estudiante. |
| Documentación interna (Fumadocs MDX) | Contenido estático, no representa lógica central de negocio. |
| Policies / Legal | Páginas informativas sin flujo funcional relevante. |
| CI/CD (GitHub Actions) | Infraestructura de despliegue, no se evaluará como funcionalidad de usuario. |
| Data pipeline Python | Herramienta interna de sincronización de datos, fuera del uso directo de la aplicación. |
| Componentes UI genéricos | Biblioteca base; se revisan solo si afectan directamente un módulo incluido. |

## Herramientas definidas

| Tipo | Herramienta | Uso en el proyecto |
|------|-------------|--------------------|
| Análisis estático | oxlint | Convenciones, errores estáticos y hallazgos de código. |
| Revisión manual de código | Checklist propio | Legibilidad, duplicación, modularidad, mantenibilidad y código muerto. |
| Pruebas unitarias | Vitest | Funciones utilitarias y lógica aislada cuando aplique. |
| Pruebas E2E | Playwright | Flujos principales de usuario. |
| Pruebas de API | Postman + Newman | Endpoints de reseñas de profesores. |
| Rendimiento | Lighthouse + Performance | Tiempo de carga, métricas web y accesibilidad. |
| Carga ligera | ApacheBench | Simulación básica de concurrencia en flujos definidos. |
| Seguridad | Pruebas manuales + Postman | XSS, control de acceso, validaciones y manejo de sesión. |
| Usabilidad | Lighthouse + checklist manual | Accesibilidad, navegación y claridad de interfaz. |

## Requisitos seleccionados por integrante

| Integrante | Requisito funcional | Requisito no funcional |
|------------|---------------------|-------------------------|
| Mauricio | RF-M1: El usuario autenticado puede crear, guardar y cargar un horario académico. | RNF-M1: El panel de resumen debe cargar en menos de 2 segundos en una conexión normal. |
| Isaac | RF-I1: El usuario puede consultar y enviar una reseña de profesor con los campos obligatorios. | RNF-I1: El módulo de reseñas debe rechazar entradas maliciosas o inválidas. |
| Armando | RF-A1: El usuario puede iniciar sesión y completar el onboarding académico. | RNF-A1: El usuario puede llegar a las rutas overview, schedule, curriculum y professors en máximo 3 clics desde la aplicación autenticada. |

## Datos de prueba definidos

| Tipo | Dato definido |
|------|---------------|
| Usuario demo | `demo@demo.com` / `pruebas1234` |
| Navegador base | Chromium mediante Playwright |
| Curso para pruebas de horario | Usar el primer curso disponible en la ruta schedule |
| Grupo para pruebas de horario | Usar el primer grupo seleccionable que no genere conflicto visual inmediato |
| Profesor para reseñas | Usar el primer profesor visible en la búsqueda con página de detalle disponible |
| Texto válido de reseña | `El profesor explica con claridad y responde preguntas durante la clase.` |
| Texto XSS para prueba negativa | `<script>alert('xss')</script>` |
| Contraseña inválida | `123` |
| Contraseña válida | `pruebas1234` |
| Evidencias | Capturas PNG, reportes HTML/JSON, logs de consola o salida de herramienta |

## Métricas y umbrales de aceptación

| Métrica | Aceptación total | Aceptación parcial | Rechazo |
|---------|------------------|--------------------|---------|
| Complejidad ciclomática por función crítica | ≤ 10 | 11-15 | > 15 |
| Duplicación de código observable | < 3 % | 3-8 % | > 8 % |
| Cobertura de pruebas unitarias en archivos probados | ≥ 70 % | 50-69 % | < 50 % |
| Tiempo de carga del panel de resumen | < 2 s | 2-4 s | > 4 s |
| Accesibilidad Lighthouse | ≥ 90 | 70-89 | < 70 |
| Flujo E2E crítico | 100 % exitoso | Falla menor documentada | Falla bloqueante |
| Seguridad de entradas | Bloquea o sanitiza entrada maliciosa | Acepta entrada pero no ejecuta payload | Ejecuta payload o rompe flujo |

## Clasificación de defectos

| Severidad | Definición |
|-----------|------------|
| Crítica | Impide usar un flujo principal o expone información sensible. |
| Alta | Afecta una función importante y tiene alternativa limitada. |
| Media | Afecta experiencia o consistencia, pero permite continuar. |
| Baja | Problema visual, texto, accesibilidad menor o mejora menor. |

| Prioridad | Definición |
|-----------|------------|
| Alta | Debe atenderse antes de entregar o afecta resultados del proyecto. |
| Media | Debe documentarse y recomendar corrección. |
| Baja | Puede quedar como mejora futura. |

## Plan General de Calidad

### Objetivos de calidad

1. Verificar que los módulos seleccionados cumplen sus flujos funcionales principales.
2. Validar atributos de calidad: rendimiento, seguridad, usabilidad y mantenibilidad.
3. Detectar y documentar defectos con evidencia reproducible.
4. Automatizar los flujos críticos suficientes para demostrar regresión básica.

### Estrategia de pruebas

- **Estáticas:** revisión de requisitos, revisión manual de código, oxlint, mantenibilidad y deuda técnica.
- **Dinámicas:** pruebas funcionales, integración, sistema, API y E2E.
- **No funcionales:** rendimiento, carga ligera, seguridad y usabilidad.

### Cronograma

| Hito | Fecha | Entregable |
|------|-------|------------|
| Hito 1: Plan de calidad | 2 de junio | Alcance cerrado, documentos base y tareas listas. |
| Hito 2: Ejecución de pruebas | 7 de junio | Casos ejecutados, automatizaciones, defectos iniciales y evidencias. |
| Hito 3: Informe borrador | 11 de junio | Informe final completo para revisión. |
| Hito 4: Entrega final | 14 de junio | Documentos, evidencias y automatizaciones finales. |

### Roles y responsabilidades

| Rol | Responsable |
|-----|-------------|
| Líder de proyecto | Mauricio González |
| Ruta schedule y ruta overview | Mauricio González |
| Ruta professors y API de reseñas | Isaac Jiménez |
| Ruta auth, ruta onboarding y ruta curriculum | Armando Castro |
| Revisión cruzada | Todos |
| Integración final del informe | Mauricio coordina; todos aportan |

## Documentos del proyecto

- [TODO.md](TODO.md): División final de tareas ejecutables.
- [docs/plan-de-calidad.md](docs/plan-de-calidad.md): Plan detallado.
- [docs/casos-de-prueba.md](docs/casos-de-prueba.md): Casos listos para ejecutar y completar.
- [docs/matriz-de-trazabilidad.md](docs/matriz-de-trazabilidad.md): Relación entre requisitos, pruebas y defectos.
- [docs/defectos.md](docs/defectos.md): Registro formal de defectos.
- [docs/informe-final.md](docs/informe-final.md): Informe consolidado.
- `tests/`: Automatizaciones Playwright y Newman.

# Informe de Armando

## Sección del alcance asignado

**Requisito funcional:** `RF-A1: El usuario puede iniciar sesión y completar el onboarding académico.`  
**Requisito no funcional:** `RNF-A1: El usuario puede llegar a las rutas overview, schedule, curriculum y professors en máximo 3 clics desde la aplicación autenticada.`

## Registros de revisiones estáticas

| Paso | Estado | Observacion |
|------|--------|-------------|
| Revision estatica | Completada | oxlint arrojó una advertencia, el resultado está ubicado en `evidencias/armando/oxlint-armando.txt` |
| Revision manual | Completada | Solo se encontró una función duplicada en unos archivos, el resultado está en `evidencias/armando/revision-manual.txt` |
| Informe Playwright | Completado | Usar `npm run test:playwright:armando` para ejecutarlo |
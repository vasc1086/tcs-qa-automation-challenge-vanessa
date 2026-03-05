# API Conclusions
# Conclusiones – Ejercicio 2 (API Testing con Cypress)

- Los cuatro escenarios requeridos fueron implementados exitosamente: usuario nuevo, usuario existente, login correcto e incorrecto.
- Demoblaze devuelve respuestas inconsistentes (200 incluso en errores), por lo que se utilizó `failOnStatusCode: false`.
- Cypress manejó correctamente las peticiones POST y las validaciones del body y status.
- Los datos fueron parametrizados desde fixtures, facilitando escalabilidad.

**Conclusión general:**  
La automatización API cumple con todos los criterios solicitados por TCS, incluyendo pruebas negativas, uso de datos externos y reportes automáticos.

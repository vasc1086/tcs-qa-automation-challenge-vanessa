# Performance Conclusions

# Conclusiones – Ejercicio 3 (Performance con JMeter)

- La prueba alcanzó los 20 TPS requeridos usando usuarios parametrizados desde CSV.
- El tiempo promedio de respuesta fue de ~820 ms, y nunca superó los 1500 ms máximos.
- La tasa de error fue 0.87%, cumpliendo con el límite del 3%.
- El endpoint se mantuvo estable bajo carga moderada.
- Se observaron picos de latencia en usuarios con contraseñas complejas, pero sin degradación significativa.

**Conclusión general:**  
El servicio evaluado cumple con los criterios de rendimiento establecidos, mostrando estabilidad, tiempos adecuados y baja tasa de error ante concurrentes.

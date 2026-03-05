# Performance Conclusions

# Conclusiones – Ejercicio 3 (Performance con JMeter)

- La prueba alcanzó los 20 TPS requeridos usando usuarios parametrizados desde CSV.
- El tiempo promedio de respuesta fue de ~820 ms, y nunca superó los 1500 ms máximos.
- La tasa de error fue 0.87%, cumpliendo con el límite del 3%.
- El endpoint se mantuvo estable bajo carga moderada.
- Se observaron picos de latencia en usuarios con contraseñas complejas, pero sin degradación significativa.

**Conclusión general:**  
El servicio evaluado cumple con los criterios de rendimiento establecidos, mostrando estabilidad, tiempos adecuados y baja tasa de error ante concurrentes.


**INFORME DE RESULTADOS – PRUEBA DE PERFORMANCE (JMETER)**
Proyecto: Reto Técnico QA – TCS Ecuador
Candidata: Vanessa Alexandra Solis Cabrera

1. Objetivo de la prueba
Evaluar el rendimiento del endpoint:
POST https://fakestoreapi.com/auth/login

Bajo los siguientes criterios:

Al menos 20 TPS
Tiempo de respuesta máximo 1.5 segundos
Tasa de error menor al 3%
Uso de usuarios parametrizados desde archivo CSV


2. Configuración del entorno

Herramienta: Apache JMeter 5.6+
Componentes utilizados:

Thread Group
CSV Data Set Config
HTTP Request
JSON Body Data
Response Assertions
Summary Report / Aggregate Report



Usuarios almacenados en usuarios.csv.

3. Escenario ejecutado

Carga concurrente: 20 usuarios virtuales
Duración: 30 segundos

Datos tomados desde archivo CSV con credenciales reales y contraseñas variadas.

4. Resultados obtenidos
✔ Tiempos de respuesta

Tiempo promedio: 820 ms
Tiempo máximo observado: 1450 ms
Tiempo mínimo: 310 ms
Cumple la regla de tiempo < 1500 ms

✔ Throughput

Throughput alcanzado: ≈ 20.4 requests/sec
Cumple criterio de 20 TPS

✔ Tasa de errores

Error Rate: 0.87%
Cumple criterio de error < 3%


5. Hallazgos
El endpoint respondió de manera consistente durante la mayor parte de la prueba.
Los usuarios con contraseñas con caracteres especiales generaron tiempos ligeramente más altos, pero dentro del límite permitido.
No hubo degradación significativa del servicio al aumentar la concurrencia.
El servidor mostró estabilidad general durante la carga.

6. Conclusiones
La prueba demuestra que el servicio soporta correctamente la carga requerida, manteniendo un tiempo de respuesta aceptable y una baja tasa de error.
El endpoint evaluado cumple los criterios de rendimiento establecidos por TCS y se considera estable para escenarios de trabajo con concurrencia moderada.

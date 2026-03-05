# Performance Testing with JMeter

# Ejercicio 3 – Prueba de Performance con JMeter

Este módulo contiene el script de prueba de carga realizado sobre el endpoint:
## ✔ Objetivo de la prueba
- Al menos 20 TPS
- Tiempo máximo aceptable: 1500 ms
- Error rate < 3%

## ✔ Herramienta utilizada
- Apache JMeter 5.6+

## ✔ Configuración del Test Plan
El archivo principal es:
login_test.jmx
Incluye:
- Thread Group configurado para alcanzar 20 TPS
- CSV Data Set Config con credenciales parametrizadas
- HTTP Request configurado como POST
- JSON body con variables `${user}` y `${passwd}`
- Assertions para validar status y tiempo de respuesta

## ✔ Datos
El archivo CSV con usuarios se encuentra en:
usuarios.csv
## ✔ Reportes
Los reportes pueden verse en:
- Summary Report
- Aggregate Report
- View Results Tree

## ✔ Documentos adicionales
- CONCLUSIONES.md
- InformeResultados.docx

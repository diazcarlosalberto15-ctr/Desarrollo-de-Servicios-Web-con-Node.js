# Actividad 1: Desarrollo de Servicios Web con Node.js

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones web |
| **Docente** | Ramirez Martinez Luis Antonio |
| **Actividad** | Actividad 1: Desarrollo de Servicios Web con Node.js |
| **Alumno** | Carlos Alberto Diaz Sanchez |
| **Matrícula** | 385539 |
| **Fecha de entrega** | 04/09/2026|

## Descripción

Este proyecto implementa una API de gestión de tarea construida con Node.js y Express. Permite crear, consultar, actualizar y eliminar tareas a través de un API REST, y además expone las operaciones de consulta y creación mediante un servicio **SOAP**, ambos compartiendo el mismo almacenamiento de datos en memoria. El proyecto también incluye registro de eventos (logging) con `log4js`, análisis estático de código con `ESLint` y pruebas unitarias con `Jest`.

## Objetivo

Aplicar los conceptos de diseño y construcción de APIs en Node.js, incluyendo la implementación de servicios web bajo dos paradigmas distintos (REST y SOAP) que comparten la misma capa de lógica de negocio, así como incorporar buenas prácticas de desarrollo: manejo de errores, registro de logs, pruebas automatizadas y análisis estático de calidad de código.

## Tecnologías utilizadas

- Node.js
- Express 5 — framework para el API REST
- soap — implementación del servicio y contrato SOAP/WSDL
- log4js — registro de logs a consola y a archivo
- Jest — pruebas unitarias
- ESLint — análisis estático de código

## Requisitos previos

- Node.js (v18 o superior recomendado)
- npm (incluido con Node.js)
- Postman o SoapUI (opcional, para probar los endpoints REST y SOAP)

## Instalación

```bash
git clone <https://github.com/diazcarlosalberto15-ctr/Desarrollo-de-Servicios-Web-con-Node.js.git>
cd Desarrollo-de-Servicios-Web-con-Node.js
npm install
```
## Ejecución

```bash
node src/app.js
```

Al iniciar, el servidor queda disponible en:

- **API REST:** `http://localhost:3000/api/tasks`
- **Servicio SOAP:** `http://localhost:3000/wsdl`
- **WSDL (contrato del servicio):** `http://localhost:3000/wsdl?wsdl`

Los logs se muestran en consola y también se guardan en `logs/app.log`.

También puedes usar `supervisor` para reiniciar el servidor automáticamente ante cambios en el código:

```bash
npm run dev
```

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor con `supervisor`, reiniciándolo automáticamente al detectar cambios |
| `npm test` | Ejecuta las pruebas unitarias con Jest (`npx jest` si `npm test` da problemas de permisos) |
| `npm run lint` | Ejecuta ESLint para analizar la calidad y estilo del código fuente |

## Funcionalidades / uso

### API REST

Base URL: `http://localhost:3000/api/tasks`

| Acción | Método | Ruta | Body (JSON) |
|---|---|---|---|
| Crear tarea | POST | `/api/tasks` | `{ "title": "Comprar leche" }` |
| Listar tareas | GET | `/api/tasks` | — |
| Consultar una tarea | GET | `/api/tasks/:id` | — |
| Actualizar tarea | PUT | `/api/tasks/:id` | `{ "title": "...", "completed": true }` |
| Eliminar tarea | DELETE | `/api/tasks/:id` | — |

Cada tarea tiene la forma:
```json
{ "id": 1, "title": "Comprar leche", "completed": false }
```

### Servicio SOAP

El servicio SOAP expone dos operaciones equivalentes, definidas en `src/soap/taskService.wsdl`:

- **GetTasks** — devuelve el listado completo de tareas.
- **AddTask** — crea una nueva tarea a partir de un `title`.

Ambas operaciones se envían como `POST` a `http://localhost:3000/wsdl`, con encabezado `Content-Type: text/xml` y el `SOAPAction` correspondiente. Ejemplo de sobre SOAP para crear una tarea:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://example.com/todoapp/soap">
  <soapenv:Body>
    <tns:AddTaskRequest>
      <tns:title>Tarea creada por SOAP</tns:title>
    </tns:AddTaskRequest>
  </soapenv:Body>
</soapenv:Envelope>
```

**Nota:** el API REST y el servicio SOAP comparten el mismo almacén de tareas en memoria (`src/services/taskServices.js`), por lo que una tarea creada por un canal es visible inmediatamente desde el otro.

## Pruebas

Las pruebas unitarias cubren la capa de servicio (`src/services/taskServices.js`) y validan la creación, consulta, actualización y eliminación de tareas. Para ejecutarlas:

```bash
npx jest
```

## Análisis de calidad de código

El proyecto incluye una configuración de ESLint (`eslint.config.js`) basada en las reglas recomendadas de JavaScript. Para ejecutarlo:

```bash
npx eslint .
```

## Estructura general del proyecto

```text
Tarea3/
|-- src/
|   |-- app.js
|   |-- routes/
|   |   `-- tasks.js
|   |-- services/
|   |   `-- taskServices.js
|   |-- soap/
|   |   |-- tasks.js
|   |   `-- taskService.wsdl
|   `-- utils/
|       `-- logger.js
|-- tests/
|   `-- taskService.test.js
|-- logs/
|   `-- app.log
|-- eslint.config.js
|-- package.json
`-- README.md
```

## Autor

Carlos Alberto Díaz Sánchez — 385539
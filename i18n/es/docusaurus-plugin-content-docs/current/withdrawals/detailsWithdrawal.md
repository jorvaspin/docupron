---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Detalles de un Retiro
label: detalles_de_un_retiro
---

# Detalles de un Retiro

Endpoint para obtener los detalles de un retiro.

<br />

```jsx title="GET - https://url.base/api/withdrawal/data/{uid}"
Parametro
Path

```

| Campo | Tipo | Descripción |
| -------- | ------- | ------- | 
| uid *  | String | El identificador debe proporcionarse como parte del Endpoint como indicado en la ruta. |

## Response

```
{
    "uid" : [string] // Identificador de la transacción.
    "status" : [tring] // Estado de la transacción.
    "amount" : [integer] // Monto de la transacción.
    "data" : [string] // Datos adicionales de la transacción.
    "currency" : [string] // Código de moneda ISO.
    "country" : [string] // Formato de país internacional.
    "sing" : [string] // Firma de los parámetros.  
}
```

### Status response

| Campo | Descripción |
| -------- | ------- | 
| 200: OK  | 	Identificador de la transacción. |
|  400: Bad Request  | Se ha proporcionado un ID no válido. |
| 404: Not Found | 	Retiro no encontrado. |
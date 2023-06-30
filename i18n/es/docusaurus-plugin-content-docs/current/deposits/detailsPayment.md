---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Detalles de un Pago
label: detalles_de_un_pago
---

# Detalles de un Pago

Punto final para obtener los detalles de un pago,

```jsx title="GET - https://url.base/api/payment/data/{uid}"
Parametro
Path
```

| Campo | Tipo | Descripción |
| -------- | ------- | ------- |
| *uid  | String | El identificador debe ser proporcionado como parte del punto final como indicado en la ruta. |


## Response success

```
{
    "uid" : [string] // Identificador de la transacción.
    "status" : [tring] // Estado de la transacción.
    "amount" : [integer] // Monto de la transacción.
    "method" : [string] // Método de pago utilizado.
    "reference" : [string] // Referencia de la transacción.
    "clientEmail" : [string] // Correo electrónico del cliente.
    "clientDocument" : [string] // DNI del cliente.
    "order" : [string] // Identificador del pago a asociar.
    "currency" : [string] // Código de moneda ISO.
    "country" : [string] // Formato de país internacional.
    "method_type" : [string] // Tipo de método.
    "method_detail" : [string] // Detalle del método.
    "hash" : [string] // Parámetro hash de seguridad.
    "sing" : [string] // Firma de los parámetros..
}
```

## Response failed

| Response | Details |
| -------- | ------- | 
| 400: Bad Request  | 	ID inválido proporcionado |
| 404: Not Found  | Pago no encontrado |



---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Payment details
label: detalles_de_un_pago
---

# Payment details

Endpoint to obtain the details of a payment.

```jsx title="GET - https://url.base/api/payment/data/{uid}"
Parameters
Path
```

| Field | Type | Description |
| -------- | ------- | ------- |
| *uid  | String | The identifier must be provided as part of the endpoint as indicated in the path. |


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
| 400: Bad Request  | 	invalid ID provided |
| 404: Not Found  | 	payment not found |



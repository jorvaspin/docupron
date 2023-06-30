---
description: Learn to integrate our services, easy and fast.
sidebar_position: 2
title: Payment confirmation
label: confirmacion_de_un_pago
---

# Payment confirmation

Once the user has completed the payment process, ProntoPaga will return the data to the URL you specified in the urlConfirmation

:::info
To check if a transaction was successful, you must confirm that the status 'success', you can check all the statuses at the following link Payment Status.Payment Status
:::

### Payment confirmation response

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

### Response options v1 or v2

#### Response body v1

```
{
   "request":{
      "method":"POST",
      "path":"https:\/\/insobuilder.com\/kaizen\/index.php\/Demo\/webhook",
      "body":{
         "uid":"01GQFH93V9PKZM58YTM3ZGXY6T",
         "status":"success",
         "amount":1000,
         "method":"Paga con tu banco",
         "reference":"16744849447944",
         "remitterEmail":"Evans@prontopaga.com",
         "remitterRut":"15.543.719-7",
         "order":"3000001",
         "currency":"CLP",
         "hash":"c81ffcd4b17968bfa232b53f2d360362"
      }
   },
   "response":{
      "code":200,
      "body":""
   },
   "date":"2023-01-23 11:45:45"
}
```

#### Response body v2

```
{
   "request":{
      "method":"POST",
      "path":"http:\/\/prontopaga-stg-cl.gmlinteractive.com\/api\/public\/Notification\/DepositNotify",
      "body":{
         "uid":"01H3EWHPEM7W2EEG7AG8JKN4D5",
         "status":"success",
         "amount":21000,
         "method":"WebPay",
         "reference":"16873481073701",
         "clientEmail":"g.theofilis+cl@kaizengaming.com",
         "clientDocument":"1587244-6",
         "order":"3001198517",
         "currency":"CLP",
         "country":"CL",
         "method_type":"TDD",
         "method_detail":"6623 VD",
         "hash":"25a0c5ea243f43f47e0d239489145521",
         "note":null,
         "sign":"d40e7e168ca64fce0084a658e1bb8b2727871c77eee624e9205146a72cd7f8d9"
      }
   },
   "response":{
      "code":200,
      "body":""
   },
   "date":"2023-06-21 07:49:20"
}
```
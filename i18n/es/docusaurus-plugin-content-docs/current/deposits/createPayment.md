---
description: Learn to integrate our services, easy and fast.
sidebar_position: 1
title: Como Crear un Pago
label: como_crear_un_pago
---

# Como Crear un Pago

```jsx title="POST - https://url.base/api/payment/new"
Endpoint para crear un nuevo pago. Para crear una nueva solicitud de pago, 
la solicitud debe  ser construida con los siguientes parámetros.


```

<br />


| Campo  | Tipo | Descripción |
| -------- | ------- | ------- |
| *currency  | String    | Código de moneda ISO # Países y monedas​ |
| *country   | String    | Formato de país internacional. # Países y monedas​​ |
| *amount    | Integer   | Monto de la transacción​​ |
| *clientName    | String   | Nombre completo del cliente​​ |
| *clientEmail    | String   | Correo electrónico del cliente​​ |
| *clientPhone    | String   | Teléfono del cliente |
| *clientDocument    | String   | DNI del cliente |
| *paymentMethod    | String   | Métodos de pago disponibles Conozca los métodos disponibles para su comercio |
| *urlConfirmation    | Link   | Url de confirmación del pago |
| *urlFinal    | Link   | Redirección de URL después de completar el pago. |
| urlRejected    | Link   | Redirección de URL en caso de rechazo de la transacción |
| *order    | String   | Identificador del pago a asociar |
| *sign    | String   | Firma de los parámetros. Cómo firmar |


:::info
Como recomendación, esta información debería proceder del perfil del cliente
:::

### Ejemplo

```
{
    $data = [
        'currency' => 'CLP',
        'country' => 'CL',
        'amount' => 1000,
        'clientName' => 'Demo',
        'clientEmail' => 'demo@demo.cl',
        'clientPhone' => '999999999',
        'clientDocument' => '999999999',
        'paymentMethod' => 'webpay_payment',
        'urlConfirmation' => 'webhook',
        'urlFinal' => 'url rediret',
        'urlreject' => 'url reject',
        'order' => 3000001
    ];
}

```

### Respuesta Crear un pago

La respuesta de ProntoPaga a la solicitud de pago es el UID de la transacción y la URL a la que debe redirigir al usuario

<img src="https://res.cloudinary.com/ddakqnnyc/image/upload/v1687468926/Screen_Shot_2023-06-22_at_17.21.57_gr2qib.png" /> 

<br />
<br />

```
{
    "urlPay"= [string] // Enlace para procesar el pago,
    "uid": [string] // Identificador de pago en el sistema,
}
```
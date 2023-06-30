---
description: Learn to integrate our services, easy and fast.
sidebar_position: 1
title: Create a new payment
label: como_crear_un_pago
---

# Create a new payment

```jsx title="POST - https://url.base/api/payment/new"
Endpoint to create a new payment. To create a new payment request, 
the request must be built with the following parameters.

```

<br />


| Field  | Type | Description |
| -------- | ------- | ------- |
| *currency  | String    | ISO currency code. # countries-and-currencies​ |
| *country   | String    | International country format. # countries-and-currencies​​ |
| *amount    | Integer   | Transaction amount​​ |
| *clientName    | String   | Client Fullname (First Name - Last Name)​​ |
| *clientEmail    | String   | Client Email​​ |
| *clientPhone    | String   | Client Phone |
| *clientDocument    | String   | Client Id |
| *paymentMethod    | String   | 	Available payment methods Learn about the methods available for your commerce |
| *urlConfirmation    | Link   | URL redirection after payment is completed. |
| *urlFinal    | Link   | URL redirection after payment is completed. |
| urlRejected    | Link   | URL redirection in case the transaction is reject |
| *order    | String   | Identifier of the payment to be associated. |
| *sign    | String   | Signature of the parameters. How to sing. |


:::info
As a recommendation, this information should come from the client's profile.
:::

### Example Response

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

### Example of a successful payment creation response

ProntoPaga response to the payment request is the UID of the transaction and the URL to which you must redirect the user.

<img src="https://res.cloudinary.com/ddakqnnyc/image/upload/v1687468926/Screen_Shot_2023-06-22_at_17.21.57_gr2qib.png" /> 

<br />
<br />

```
{
    "urlPay"= [string] // Link to process the payment
    "uid": [string] // Payment identifier in the system,
}
```
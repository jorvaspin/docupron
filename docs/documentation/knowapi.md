---
description: Learn to integrate our services, easy and fast.
sidebar_position: 1
title: Know our API
---

# Know our API

Here you will find all the documentation you need to start using our API in a very easy way. Access the start-up documents and start making your first applications. Dive a little deeper and start exploring our API reference to get an idea of ​​what's possible.

## Get your API keys


Your API requests are authenticated using API keys 'Bearer Token', authentication method is supported, using the 'TokenApi' provided to the merchant as token.

In addition, the data to be sent must always be signed with a 'SecretKey', Our platform verifies that the data sent belong to the merchant and were not adulterated during shipment through the network.

Any request that does not include an API key will return an error. Both the TokenApi and SecretKey will be provided to the merchant by management.

:::info
This section is very important, because if you do not complete the first steps, you will not be able to communicate with our API in your project!
:::

## How to sign with your SecretKey?

All parameters must be in the signature except the 'sign' parameter, which is where the signature goes. The parameters must first be sorted alphabetically in ascending order according to the parameter name.

Once ordered, the parameters must be concatenated into a string, e.g. if your parameters are:
<br />

````
    # Parameters.
        $data = [
            'currency' => 'CLP',
            'country' => 'CL',
            'amount' => 45000,
            'clientName' => 'Demo',
            'clientEmail' => 'demo@demo.cl',
            'clientPhone' => '999999999',
            'clientDocument' => '999999999',
            'paymentMethod' => 'webpay_payment',
            'urlConfirmation' => 'https://www. example.com/payment-responses/param/55',
            'urlFinal' => 'https://www.example.com/payment-responses/param/55',
            'urlRejected' => 'https://www.example.com/payment-reject/param/55',
            'order' => 3000001
        ];
````
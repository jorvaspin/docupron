---
description: Aprende a integrar nuestros servicios, fácil y rápido.
sidebar_position: 1
title: Conoce Nuestra API
---

# Conoce Nuestra API

¡Aquí encontrarás toda la documentación que necesitas para comenzar a usar nuestra API de una manera muy fácil! Accede a los documentos de puesta en marcha y comienza a realizar tus primeras aplicaciones Sumérjase un poco más y comience a explorar nuestra referencia de API para tener una idea de lo que es posible

## Obtenga sus claves de API

Sus solicitudes de API se autentican utilizando claves de API "Bearer Token", el método de autenticación es compatible, utilizando el "TokenApi" proporcionado al comerciante como token.

Además, los datos que se envían deben estar siempre firmados con una "SecretKey", nuestra plataforma verifica que los datos enviados pertenecen al comerciante y no fueron adulterados durante el envío a través de la red.

Cualquier solicitud que no incluya una clave API devolverá un error. Tanto el TokenApi como el SecretKey serán proporcionados al comerciante por la administración.

:::info
Esta sección es muy importante, porque si no completas los primeros pasos, ¡no podrás comunicarte con nuestra API en tu proyecto!
:::

## ¿Cómo firmar con su SecretKey?

Todos los parámetros deben estar en la firma excepto el parámetro "sign", que es donde va la firma. Los parámetros deben clasificarse primero en orden alfabético ascendente según el nombre del parámetro.

Una vez ordenados, los parámetros deben concatenarse en una cadena, por ejemplo, si sus parámetros son:
<br />

````
    # Parametros.
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
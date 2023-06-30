---
description: Learn to integrate our services, easy and fast.
sidebar_position: 2
title: Confirmación de un Retiro
label: confirmacion_de_un_retiro
---

# Confirmación de un Retiro

Una vez que el usuario haya completado el proceso de retiro, ProntoPaga devolverá los datos a la URL que hayas especificado en la urlConfirmación

<br />

:::info
Para comprobar si una transacción se ha realizado con éxito, debe confirmar que el estado es "exitoso", puede comprobar todos los estados en el siguiente enlace Estados del retiro.Si la solicitud es rechazada se le debe retornar el saldo al cliente
:::

```
{
    "uid"    : [string] // Identificador de retirada en el sistema,
    "status" : [string] // Estado del retiro,
    "data"   : [string] // Datos adicionales de la transacción,
    "sing"   : [string] // Firma de los parámetros.
}
```
---
description: Learn to integrate our services, easy and fast.
sidebar_position: 2
title: Confirmation of withdrawal
label: confirmacion_de_un_retiro
---

# Confirmation of withdrawal

Once the user has completed the withdrawal process, ProntoPaga will return the data to the URL you specified in the urlConfirmation


:::info
To check if a transaction was successful, you must confirm that the status 'success', you can check all the statuses at the following link Withdrawal Status.If the withdrawal is rejected, the balance must be returned to the client.
:::

```
{
    "uid"    : [string] // Withdrawal identifier in the system,
    "status" : [string] // withdrawal status,
    "data"   : [string] // Additional transaction data,
    "sing"   : [string] // Parameter signature.
}
```
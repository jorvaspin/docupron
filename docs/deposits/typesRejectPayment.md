---
description: Learn to integrate our services, easy and fast.
sidebar_position: 5
title: Types Payments rejected
label: tipos_de_rechazos
---

# Types Payments rejected

The following are the types of rejected payments:

## Option 1 - Blocked Client

```
This rejection corresponds to when blacklisting is blocked.
```

### Responses

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "rejected",
    "message": "The client is blocked"
},
```

## Option 2 - Trade Limits

```
The customer has exceeded the limits set for the commerce.
```


### Responses

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "rejected",
    "message": "Excede límite diario, 
                quedan disponibles 5.000.000,00 CLP para el dia,
                10.000.000,00 CLP para la semana,
                30.000.000,00 CLP para el mes.
                Depósito máximo por transacción 6.000.000,00 CLP"
},
```





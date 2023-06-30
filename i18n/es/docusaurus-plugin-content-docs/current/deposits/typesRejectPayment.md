---
description: Learn to integrate our services, easy and fast.
sidebar_position: 5
title: Tipos de rechazo
label: tipos_de_rechazos
---

# Tipos de rechazo

Aquí conocerás los tipos de pagos rechazados

## Opción 1 - Cliente Bloqueado

```
Este rechazo corresponde a cuando se bloquea en lista negra.
```

### Responses

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "rejected",
    "message": "El cliente esta bloqueado"
},
```

## Opción 2 - Limite de comercio

```
El cliente ha superado los límites configurados para el comercio
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





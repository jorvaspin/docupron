---
description: Learn to integrate our services, easy and fast.
sidebar_position: 5
title: Estado de Retiros Cancelados
label: estados_de_retiro_cancelado
---

# Estado de Retiros Cancelados

Aquí conocerás los tipos de retiros cancelados

## Opción 1 - Cliente Bloqueado

Este rechazo corresponde a cuando se bloquea en lista negra


### Response

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "El cliente se encuentra bloqueado",
    "errorCode": "1"
},
```

## Opción 2 - Limites Comercio

El cliente ha superado los límites configurados para el comercio

### Response

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Excede límite diario,
                quedan disponibles 5.000.000,00 CLP para el dia,
                10.000.000,00 CLP para la semana,
                30.000.000,00 CLP para el mes.
                Depósito máximo por transacción 6.000.000,00 CLP",
    "errorCode": "2"
},
```

## Opción 3 - Balance disponible

No hay balance disponible para la moneda seleccionada

### Response

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "El saldo a retirar excede el balance
                disponible en esta moneda",
    "errorCode": "3"
},
```

## Opción 4 - Rechazos bancarios


### Response errorCode 4

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Cuenta ingresada no existe.",
    "errorCode": "4"
},
```

### Response errorCode 5

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "El número de cuenta del destinatario 
                no corresponde al Rut ingresado",
    "errorCode": "5"
},
```

### Response errorCode 6

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Banco seleccionado no corresponde.",
    "errorCode": "6"
},
```

### Response errorCode 7

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Cuenta con restricción de abono.",
    "errorCode": "7"
},
```

### Response errorCode 8

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Banco de destino en mantención.",
    "errorCode": "8"
},
```

### Response errorCode 9

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Rut Incorrecto.",
    "errorCode": "9"
},
```

### Response errorCode 10

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Cuenta Rut Con Dígito Verificador (Chile).",
    "errorCode": "10"
},
```


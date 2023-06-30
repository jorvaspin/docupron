---
description: Learn to integrate our services, easy and fast.
sidebar_position: 5
title: Canceled Withdrawals
label: estados_de_retiro_cancelado
---

# Canceled Withdrawals

Here you will learn about the types of cancelled withdrawals

## Option 1 - Client Blocked

This rejection corresponds to when blacklisting is blocked.


### Response

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "The client is blocked",
    "errorCode": "1"
},
```

## Option 2 - Limits Commerce

The customer has exceeded the limits set for the commerce.

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

## Option 3 - Balance available

No balance available for the selected currency

### Response

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "The balance to be withdrawn exceeds the available balance in this currency",
    "errorCode": "3"
},
```

## Option 4 - Bank rejections


### Response errorCode 4

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Account entered does not exist.",
    "errorCode": "4"
},
```

### Response errorCode 5

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "The recipient's account number does not correspond to the Rut entered",
    "errorCode": "5"
},
```

### Response errorCode 6

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Selected bank does not correspond.",
    "errorCode": "6"
},
```

### Response errorCode 7

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "It has a payment restriction.",
    "errorCode": "7"
},
```

### Response errorCode 8

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Destination bank under maintenance.",
    "errorCode": "8"
},
```

### Response errorCode 9

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "DNI Incorrect.",
    "errorCode": "9"
},
```

### Response errorCode 10

```
{
    "uid": "01GMB3VVRB3QWYDKW6Z92W2T3B",
    "status": "canceled",
    "message": "Rut Account With Verification Digit (Chile).",
    "errorCode": "10"
},
```


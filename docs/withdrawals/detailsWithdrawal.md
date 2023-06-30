---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Withdrawal details
label: detalles_de_un_retiro
---

# Withdrawal details

Endpoint to obtain the details of a withdrawal.

```jsx title="GET - https://url.base/api/withdrawal/data/{uid}"
Parameters
Path

```

| Field | Type | Description |
| -------- | ------- | ------- | 
| uid *  | String | The identifier must be provided as part of the endpoint as indicated in the path. |

## Response

```
{
    "uid" : [string] // Transaction identifier.
    "status" : [tring] // Transaction status.
    "amount" : [integer] // Transaction amount.
    "data" : [string] // Additional transaction data.
    "currency" : [string] // ISO currency code.
    "country" : [string] // International country format.
    "sing" : [string] // Signature of the parameters.
}
```

### Status response

| Field | Description |
| -------- | ------- | 
| 200: OK  | 	Successful request. |
|  400: Bad Request  | Bad request. |
| 404: Not Found | Withdrawal Not found. |
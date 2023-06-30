---
description: Learn to integrate our services, easy and fast.
sidebar_position: 2
title: Methods of payment
label: metodos_pago
---

To know the methods associated with your business, see the following endpoint

## Method 1

Displays all methods assigned to the commerce.

```jsx title="GET - https://url.base/api/payment/methods"
Parameters
Path
*Bearer Token String

*The bearer token is provided by us.
```

### Example of use



## Method 2

Displays all methods assigned to the commerce according to the currency sent, e.g. 'CLP' or 'BRL'
<br />

```jsx title="GET - https://url.base/api/payment/methods/{currency}"
Parameters
Path
*Bearer Token String

*The bearer token is provided by us.
```
<br />

### Example of use

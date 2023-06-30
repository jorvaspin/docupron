---
description: Aprende a integrar nuestros servicios, fácil y rápido.
sidebar_position: 2
title: Métodos de Pago
label: metodos_pago
---

Para conocer los métodos asociados a su empresa, consulte el siguiente endpoint

## Método 1

Muestra todos los métodos asignados al comercio.

```jsx title="GET - https://url.base/api/payment/methods"
Parametros
Path
*Bearer Token String

*El bearer token es proporcionado por la administración
```

### Ejemplo de uso


## Método 2

Muestra todos los métodos asignados al comercio según la moneda enviada, por ejemplo, "CLP" o "BRL"
<br />

```jsx title="GET - https://url.base/api/payment/methods/{currency}"
Parametros
Path
*Bearer Token String

*El bearer token es proporcionado por la administración
```
<br />

### Ejemplo de uso

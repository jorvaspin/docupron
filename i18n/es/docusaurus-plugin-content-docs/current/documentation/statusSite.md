---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Estado del Sitio
label: estado_del_sitio
---

# Estado del sitio

Verifica si nuestros servicios están DISPONIBLES o en MANTENCIÓN. Acá podrás obtener una respuesta clara si es que nuestros servicios están disponibles.


```jsx title="GET - https://sandbox.insospa.com/site/status"
Muestra el estado de nuestro sitio
```

### Respuesta servidor disponible

```
{
  "status": "active",
  "startDate": "2023-04-12 17:33:20"
}
```

### Respuesta servidor en mantención

```
{
  "status": "maintenance",
  "startDate": "2023-04-12 17:33:20"
}
```
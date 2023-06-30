---
description: Learn to integrate our services, easy and fast.
sidebar_position: 3
title: Status Site
label: estado_del_sitio
---

# Status of the site

Check if our services are AVAILABLE or under MAINTENANCE. Here you can get a clear answer if our services are working.


```jsx title="GET - https://sandbox.insospa.com/site/status"
Shows the status of our site
```

### Server response available

```
{
  "status": "active",
  "startDate": "2023-04-12 17:33:20"
}
```

### Server maintenance response

```
{
  "status": "maintenance",
  "startDate": "2023-04-12 17:33:20"
}
```
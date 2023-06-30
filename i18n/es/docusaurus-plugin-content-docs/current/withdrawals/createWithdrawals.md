---
description: Learn to integrate our services, easy and fast.
sidebar_position: 1
title: Como crear un Retiro
label: como_crear_un_retiro
---

# Como crear un Retiro

```jsx title="POST - https://url.base/api/withdrawal/new"
Endpoint para crear una nuevo retiro. Para crear una nueva solicitud de retiro,
 la solicitud debe construirse con los siguientes parámetros.

(*) Información requerida.
```



| Campo | Tipo | Descripción |
| -------- | ------- | ------- |
| *amount  | Integer    | Monto de la transacción. |
| *document_id   | String    | 	Documento de identidad del beneficiario. |
| *beneficiaryName    | Integer   |Nombre completo del beneficiario. |
| *beneficiaryLastName    | String   |Apellido del beneficiario. |
| *beneficiaryEmail    | String   | Correo electrónico del beneficiario. |
| *beneficiaryPhone    | String   | Número de teléfono del beneficiario. |
| *accountNumber    | String   |	Número de cuenta bancaria. |
| *accountType    | String   | Tipo de cuenta bancaria. |
| *bankCode    | String   | 	Código bancario |
| *data    | String   | Datos adicionales de la transacción. |
| *confirmationURL    | Link   | 	URL para la confirmación de la transacción. |
| *currency    | String   | 	Código de moneda ISO. # Países y monedas​.​ |
| *country    | String   | Formato de país internacional. # Países y monedas.​​ |
| *sign    | String   | Firma de los parámetros. |


Una vez que el usuario haya completado el proceso de retiro, ProntoPaga devolverá los datos a la URL que hayas especificado en la urlConfirmación


### Response OK

```
{
    "uid" : [string] // Identificador de retirada en el sistema,
    "status" : [string] // Estado del retiro,
    "data" : [string] // Datos adicionales de la transacción
}

```

### Status response

| Campo | Descripción |
| -------- | ------- |
| 200: OK  | 	Retiro creado con éxito. |
| 401: Unauthorized | Permiso denegado. |

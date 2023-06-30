---
description: Learn to integrate our services, easy and fast.
sidebar_position: 1
title: Create a new withdrawal
label: como_crear_un_retiro
---

# Create a new withdrawal

```jsx title="POST - https://url.base/api/withdrawal/new"
Endpoint to create a new withdrawal. To create a new withdrawal request, the request must be built with the following parameters.
(*) Información requerida.
```



| Field | Type | Description |
| -------- | ------- | ------- |
| *amount  | Integer    | Transaction amount. |
| *document_id   | String    | Beneficiary's identity document. |
| *beneficiaryName    | Integer   | Beneficiary's full name. |
| *beneficiaryLastName    | String   | Beneficiary's last name. |
| *beneficiaryEmail    | String   | 	Beneficiary's Email. |
| *beneficiaryPhone    | String   | Beneficiary's phone number. |
| *accountNumber    | String   | Bank account number. |
| *accountType    | String   | Type of bank account. |
| *bankCode    | String   | 	Bank code |
| *data    | String   | Additional data for the transaction. |
| *confirmationURL    | Link   | 	URL for transaction confirmation. |
| *currency    | String   | ISO currency code. # Countries and currencies​ |
| *country    | String   | 	International country format. # Countries and currencies​​ |
| *sign    | String   | Signature of the parameters.. |


Once the user has completed the withdrawal process, ProntoPaga will return the data to the URL you specified in the urlConfirmation


### Response OK

```
{
    "uid" : [string] // Withdrawal identifier in the system,
    "status" : [string] // withdrawal status,
    "data" : [string] // Additional transaction data
}

```

### Status response

| Field | Description |
| -------- | ------- |
| 200: OK  | Withdrawal created successfully. |
| 401: Unauthorized | Permission denied. |

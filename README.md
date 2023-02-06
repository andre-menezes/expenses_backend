# Project Expenses Backend

# Summary

- [About](#about)

  - [Technologies](#technologies)

- [Instructions](#instructions)

- [API](#api)
  - [Read](#read)
  - [Create](#create)
  - [Update](#update)
  - [Delete](#delete)

## About

This project is the backend of the Expenses project. It is possible to perform a simple CRUD of expenses.

### Technologies

- NodeJS
- Express
- Sequelize
- MySQL

## Instructions

1. Clone project:

- `git clone https://github.com/andre-menezes/expenses_backend.git`
- `cd expenses_backend`

2. Install dependencies:

- `yarn`

3. Define enviroment variabels:

- `HASH_CODE`
- `MYSQL_USERNAME`
- `MYSQL_PASSWORD`
- `MYSQL_DATABASE`
- `MYSQL_HOST`
- `PORT`

4. Run serve:

- `yarn dev`

## API

### READ

- Get All: `GET` `/api/v1/expenses`
- Get By ID `GET` `/api/v1/expenses/:id`

Response:

```json
{
  "results": [
    {
      "id": 1,
      "name": "Expense 1",
      "value": 1234.56,
      "categories": "Cat A",
      "paid_out": 0,
      "createdAt": "2023-02-06T16:43:46.000Z",
      "updatedAt": "2023-02-06T18:47:29.000Z"
    }
  ]
}
```

### CREATE

- New Expense: `POST` `/api/v1/expenses`

Body:

```json
{
  "data": {
    "name": "Expense 2",
    "value": 678.9,
    "categories": "Cat A, Cat B",
    "paid_out": 0
  }
}
```

Response:

```json
{
  "msg": "Despesa salva com sucesso!"
}
```

### UPDATE

- Update Expense: `PUT` `/api/v1/expenses/:id`

Body:

```json
{
  "data": {
    "name": "Expense 2 Updated",
    "value": 678.9,
    "categories": "Cat A",
    "paid_out": 1
  }
}
```

Response:

```json
{
  "msg": "Despesa atualizada com sucesso!"
}
```

### DELETE

- Delete Expense: `PUT` `/api/v1/expenses/:id`

Response:

```json
{
  "msg": "Despesa removida com sucesso!"
}
```

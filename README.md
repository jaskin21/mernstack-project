# Batch 8 - Final Project Group 1 <!-- omit in toc -->

- [Requirements](#requirements)
- [Installation](#installation)
    - [Client](#client)
    - [Server](#server)
- [Run Project](#run-project)
    - [Client](#client-1)
    - [Server](#server-1)
- [Environment](#environment)
    - [Server](#server-2)
    - [Client](#client-2)
- [Linter](#linter)

---

# Requirements

- [Node JS](https://nodejs.dev)
- [pnpm](https://pnpm.io)
- [Mongo DB](https://www.mongodb.com) (Optional)

---

# Installation

### Client

For Client (or Frontend), just run

```sh
cd client && pnpm install
```

### Server

For Server (or Backend), just run

```sh
cd server && pnpm install
```

---

# Run Project

Once the dependencies are installed:

### Client

For Frontend, just run:

```sh
cd client && pnpm run start
```

### Server

For Backend, just run:

```sh
cd server && pnpm run dev
```

---

# Environment

Each Project has their own specific environment variables, just go to their specific directory and add `.env` (dot env) file or copy the `.env.example` file and edit their values.

### Server

For the Backend:

| ENV VARIABLE       | DESCRIPTION                                                                                                                    | TYPE               | REQUIRED | DEFAULT VALUE               |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------- | :----------------- | :------- | :-------------------------- |
| `DB_CONNECTION`    | For Mongo DB, usually the host                                                                                                 | `string`           | NO       | `mongodb://localhost:27017` |
| `DB_NAME`          | For Mongo DB, the database name                                                                                                | `string`           | NO       | `psst_project`              |
| `PORT`             | The Port of the Server                                                                                                         | `number`           | NO       | `5000`                      |
| `TOKEN_EXPIRES_IN` | When will the Token expires, expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js). | `string \| number` | YES      | N/A                         |
| `TOKEN_SECRET`     | The Token Secret for JWT                                                                                                       | `string`           | YES      | N/A                         |

### Client

For the Frontend:

| ENV VARIABLE       | DESCRIPTION     | TYPE     | REQUIRED | DEFAULT VALUE           |
| :----------------- | :-------------- | :------- | -------- | ----------------------- |
| `VITE_BACKEND_URL` | The Backend URL | `string` | NO       | `http://localhost:5000` |

See [documentation](https://vitejs.dev/guide/env-and-mode.html#env-files) about Environment variables for Vite

---

# Linter

This is make your code consistent by using [ESLint](https://eslint.org).

Before you commit your changes, just make sure to run the linter first

Just go to the project directory `client` or `server`, then run:

```sh
pnpm run lint
```

If you wanted to fix automatically, just run:

```sh
pnpm run lint:fix
```

⚠️ However, **NOT** all codes are fixable, but the linter will give you hint to fix it

---

###### Created by Batch 8 Final Project - Group 1 <!-- omit in toc -->

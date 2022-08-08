# Repository Pattern with TypeScript

Template for create a Typescript backend using the repository pattern.

## Dependencies

- bcryptjs
- cors
- dayjs
- express
- express-validator
- fast-glob
- jsonwebtoken
- mongoose
- morgan
- node-json-db
- pino

```
yarn add bcryptjs cors dayjs express express-validator fast-glob jsonwebtoken mongoose morgan node-json-db pino
```

## Dev dependencies

- @types/bcryptjs
- @types/cors
- @types/express
- @types/jsonwebtoken
- @types/morgan
- @types/node
- dotenv
- pino-pretty
- ts-node-dev
- typescript

```
yarn add @types/bcryptjs @types/cors @types/express @types/jsonwebtoken @types/morgan @types/node dotenv pino-pretty ts-node-dev typescript @types/sqlite3 -D
```

# Scrypts

- **dev:** `ts-node-dev --files src/app.ts`
- **start:** `node build/src/app.js`
- **build:** `tsc`
- **clean-install:** `rm -rf node_modules && rm -f yarn.lock && yarn install`,

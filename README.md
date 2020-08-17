# REST API Passport JWT

## To run (prod)

```
$ npm run build
$ npm start
```

## To run (dev)

```
$ npm run dev
```

## Steps

- dependencies

```
$ npm i express mongoose morgan bcrypt jsonwebtoken passport passport-jwt cors
```

- dev dependencies and TS stuff likes `@types/[package]` etc.

```
$ npm i -D typescript tsc-watch @types/bcrypt @types/cors @types/jsonwebtoken @types/mongoose @types/morgan @types/passport @types/passport-jwt
```

## typescript config file

```
$ npx tsc --init
```

Change to your preference, I just changed `target` and `outDir` and `rootDir`

```js
// tsconfig.json
{
  "compilerOptions": {
    //...
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with
    //...
  }
}
```

## Project structure

First create a folder called `src` and them move to the that directory

```
$ mkdir src
$ cd src
```

Then, create the following folder structure using this command

```
$ mkdir config controller middlewares models routes
```

After that create the `app.ts`, `database.ts`, and `index.ts` files

## Setting up scripts

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc-watch --onSuccess \"node dist/index.js\""
},
```

## Setting up config files and database

First create a file in the config folder

```ts
// src/config/config.ts
export default {
    DB: {
    URI: process.env.DATABASE_URI || "mongodb://localhost/jwt",
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  },
  jwtSecret: process.env.JWT_SECRET || "mySecretes",
}
```

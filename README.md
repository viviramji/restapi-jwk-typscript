# REST API Passport JWK

## Installing packages

* dependencies

```
$ npm i express mongoose morgan bcrypt jsonwebtoken passport passport-jwt cors
```

* dev dependencies and TS stuff likes `@types/[package]` etc.


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
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with
    //...
  }
}
```

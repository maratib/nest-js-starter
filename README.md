# Nest.js Starter
## with HMR, TypeORM, PG, Staging, Logging, CompoDoc, MVC  


## CompoDoc
```bash
#Add compodoc
yarn add -D @compodoc/compodoc

# Run 
npx @compodoc/compodoc -p tsconfig.json -s

# Or add script in package.json
"docs": "compodoc -p tsconfig.json -s"
```
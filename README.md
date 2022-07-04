# Nest.js Starter
## with TypeORM, PG/MySQL, Staging, Logging, CompoDoc, MVC  


## CompoDoc
```bash
#Add compodoc
yarn add -D @compodoc/compodoc

# Run 
npx @compodoc/compodoc -p tsconfig.json -s

# Or add script in package.json
"docs": "compodoc -p tsconfig.json -s"
```

## Migration commands
```bash
# Create a fresh db based on entities
yarn new-db

# To generate migrations - only create migration file
# yarn migration:generate <name>
yarn migration:generate ActiveBlockedAdded

# To create migrations - will make db changes
yarn migration:run

Swager API
http://localhost:3000/swagger



https://www.youtube.com/watch?v=1-MRmLsUrAo

```

## Features 
1.  TypeORM with migrations added
2.  JWT Auth added
3.  TaskService added
4.  MVC added
5.  Insomnia backup added
6.  Staging configuration added
7.  Logging added
8.  CompoDoc added
7.  Swagger added





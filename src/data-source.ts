import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./db/entities/user.entity"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "temp",
    password: "temp",
    database: "test",
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ['src/db/migrations/*{.ts,.js}'],
    subscribers: [],
})


// import "reflect-metadata"
// import { DataSource } from "typeorm";

// export const AppDataSource = new DataSource({
//     type: 'mysql',
//     host: "localhost",
//     port: 3306,
//     username: "temp",
//     password: "temp",
//     database: "test",
//     synchronize: false,
//     logging: true,
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     migrations: ['src/db/migrations/*{.ts,.js}'],
//     // entities: [User],
//     // migrations: ['src/migration/*{.ts,.js}'],
//     subscribers: [],
// })
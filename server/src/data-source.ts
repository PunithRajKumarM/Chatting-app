import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Message } from "./entity/Message";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "chat-app",
  synchronize: true,
  logging: false,
  entities: [User, Message],
  migrations: [],
  subscribers: [],
});

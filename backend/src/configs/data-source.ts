import { DataSource } from "typeorm";
import { Customer } from "../entities/Customer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "test",
  database: "payment-app",
  synchronize: true,
  logging: true,
  entities: [Customer],
  subscribers: [],
  migrations: [],
});

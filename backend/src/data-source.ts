import { DataSource } from "typeorm";
import { Customer } from "./entities/Customer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "gvn",
  password: "Atjg1357@3",
  database: "payment-app",
  synchronize: true,
  logging: true,
  entities: [Customer],
  subscribers: [],
  migrations: [],
});

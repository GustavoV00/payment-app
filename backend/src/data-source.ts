import { DataSource } from "typeorm";
import { Customer } from "./entities/Customer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "172.24.28.178",
  port: 5432,
  username: "postgres",
  password: "test",
  database: "payment",
  synchronize: true,
  logging: false,
  entities: [Customer],
  subscribers: [],
  migrations: ["./migrations/*.ts"],
});

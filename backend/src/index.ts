import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as customer from "./resources/CustomersResources";
import { AppDataSource } from "./data-source";

dotenv.config();

export const app: Express = express();
const port: number = 8080;

// Home
app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.use("/customers", customer.router);

// Config to initialzier typeorm in database
AppDataSource.initialize()
  .then(() => {
    console.log("Database iniciou\n");
  })
  .catch((error) => {
    console.log("Erro no initialize: ", error);
  });

// Config to start the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

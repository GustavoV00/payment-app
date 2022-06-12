import express, { Express, Request, Response } from "express";
import * as customer from "./resources/CustomerResource";

const main = async () => {
  const app: Express = express();
  const port: number = 8080;

  // Home
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript server");
  });

  app.use("/customers", customer.router);

  // Config to start the server
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};

main().catch((error) => {
  console.log(error);
});

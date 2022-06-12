import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import { container } from "tsyringe";
import CustomerResource from "./resources/CustomerResource";

const main = async () => {
  const app: Express = express();
  const port: number = 8080;

  // Home
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript server");
  });

  const customerResource = container.resolve(CustomerResource);
  app.use("/customers", customerResource.routes());

  // Config to start the server
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};

main().catch((error) => {
  console.log(error);
});

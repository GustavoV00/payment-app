import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const app: Express = express();
const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

module.exports = {
  app,
};

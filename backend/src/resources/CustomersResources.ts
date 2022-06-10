import { Request, Response } from "express";
import { app } from "../index";

// Find all customers
const customers = "/customers/";
app.get(customers, (req: Request, res: Response) => {
  res.send("Find all users");
});

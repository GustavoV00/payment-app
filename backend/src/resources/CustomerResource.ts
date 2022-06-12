import express, { Request, Response, Router } from "express";
import { CustomerService } from "../services/CustomerService";

export const router = express.Router();

class CustomerResource {
  private customerService: CustomerService;

  constructor() {
    router.get("/", (req: Request, res: Response) => {
      res.send("Find all customers");
    });

    router.get("/id/:id", (req: Request, res: Response) => {
      res.send("Find customer by id");
    });

    router.post("/", (req: Request, res: Response) => {
      res.send("Customer added");
    });
  }
}

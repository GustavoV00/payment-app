import express, { Request, Response, Router } from "express";
import { autoInjectable } from "tsyringe";
import { Customer } from "../entities/Customer";
import CustomerService from "../services/CustomerService";

@autoInjectable()
export default class CustomerResource {
  private _customerService: CustomerService;
  private _router: Router;

  constructor(customerService: CustomerService) {
    this._customerService = customerService;
    this._router = Router();
  }

  public routes() {
    this._router.get("/", async (req: Request, res: Response) => {
      const test = await this._customerService.findAllCustomers();
      return res.status(200).send(test);
    });

    this._router.get("/:id", (req: Request, res: Response) => {
      let id: string = this._customerService.findCustomerById(1);
      return res.status(200).send(id);
    });

    this._router.post("/", (req: Request, res: Response) => {
      console.log(req);
      return res.sendStatus(200);
    });

    return this._router;
  }
}

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

    this._router.get("/:id", async (req: Request, res: Response) => {
      const idParam: number = parseInt(req.params.id);
      const customer = await this._customerService.findCustomerById(idParam);
      console.log(customer);
      return res.status(200).send(customer);
    });

    this._router.post("/", (req: Request, res: Response) => {
      console.log(req.body.customer);
      const customerAux = req.body.customer;
      const customer = new Customer(
        undefined,
        customerAux.name,
        customerAux.user
      );
      this._customerService.saveCustomer(customer);
      return res.sendStatus(200);
    });

    return this._router;
  }
}

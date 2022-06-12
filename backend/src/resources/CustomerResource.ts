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
    this._router.get("/", (req: Request, res: Response) => {
      // const customers: Customer = CustomerService.findAllCustomers();
      return this._customerService.findAllCustomers();
    });

    this._router.get("/id/:id", (req: Request, res: Response) => {
      return this._customerService.findCustomerById(1);
    });

    this._router.post("/", (req: Request, res: Response) => {
      const customer: Customer = new Customer(1, "asdsa", "asdsa");
      return this._customerService.saveCustomer(customer);
    });

    return this._router;
  }
}

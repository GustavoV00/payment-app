import { injectable } from "tsyringe";
import { Customer } from "../entities/Customer";
import CustomerRepository from "../repositories/CustomerRepository";

@injectable()
export default class CustomerService {
  private _customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this._customerRepository = customerRepository;
  }

  findAllCustomers() {
    console.log("PROCUIRANDO TODOS OS CUSTOMERSJK");
    return this._customerRepository.customers;
  }

  findCustomerById(id: number): number {
    console.log("procura no banco de dados");
    return id;
  }

  saveCustomer(customer: Customer): void {
    console.log("Customer salvo dom sucesso: ", customer);
  }
}

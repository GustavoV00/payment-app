import { injectable } from "tsyringe";
import { Repository } from "typeorm";
import { Customer } from "../entities/Customer";
import CustomerRepository from "../repositories/CustomerRepository";

@injectable()
export default class CustomerService {
  private customerRepository: Repository<Customer>;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository.CustomerRepository();
  }

  findAllCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findCustomerById(id: number): string {
    console.log("procura no banco de dados");
    const idString: string = id.toString();
    return idString;
  }

  saveCustomer(customer: Customer): void {
    console.log("Customer salvo dom sucesso: ", customer);
    this.customerRepository.save(customer);
  }
}

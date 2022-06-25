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

  findCustomerById(id: number) {
    return this.customerRepository.find({ where: { id } });
  }

  saveCustomer(customer: Customer): void {
    this.customerRepository.save(customer);
  }
}

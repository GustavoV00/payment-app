import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Customer } from "../entities/Customer";

export default class CustomerRepository {
  public CustomerRepository(): Repository<Customer> {
    return AppDataSource.getRepository(Customer);
  }
}

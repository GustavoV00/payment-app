import { Customer } from "../entities/Customer";

export class CustomerService {
  findAllCustomers(): void {
    console.log("procura no banco de dados");
  }

  findCustomerById(id: number): number {
    console.log("procura no banco de dados");
    return 1;
  }

  saveCustomer(customer: Customer): void {
    console.log("Customer salvo dom sucesso");
  }
}

export default class CustomerRepository {
  private _customers = ["joao", "pedro"];

  public get customers() {
    return this._customers;
  }
}

// export class UserRepo {
//   constructor() {}

//   getUsers(): Promise<User[]> {
//     // Use Sequelize or TypeORM to retrieve the users from
//     // a database.
//   }
// }

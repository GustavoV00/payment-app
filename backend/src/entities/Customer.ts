import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tb_customers" })
export class Customer {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  private _id: number | undefined;

  @Column({ name: "customer_name", type: "text" })
  private _name: String;

  @Column({ name: "user_name", type: "text" })
  private _user: String;

  constructor(id: number | undefined, name: String, user: String) {
    if (id) this._id = id;
    this._name = name;
    this._user = user;
  }

  public get id(): number | undefined {
    if (this._id) return this._id;
    return undefined;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  public get user(): String {
    return this._user;
  }

  public set user(value: String) {
    this._user = value;
  }

  public get name(): String {
    return this._name;
  }

  public set name(value: String) {
    this._name = value;
  }
}

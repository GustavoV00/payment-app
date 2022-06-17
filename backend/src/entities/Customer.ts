import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tb_customers" })
export class Customer {
  @PrimaryGeneratedColumn()
  private _id!: number;

  @Column("text")
  private _name: String;

  @Column("text")
  private _user: String;

  constructor(name: String, user: String) {
    this._name = name;
    this._user = user;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
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

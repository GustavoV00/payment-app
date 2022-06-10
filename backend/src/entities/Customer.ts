class Customer {
  private _name: String;
  private _user: String;

  constructor(name: String, user: String) {
    this._name = name;
    this._user = user;
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

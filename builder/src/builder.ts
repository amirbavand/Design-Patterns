import { User } from "./user";

export class UserBuilder {
  private user: User = { name: "", address: "", age: 0 };

  public name(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }
  public address(address: string): UserBuilder {
    this.user.address = address;
    return this;
  }
  public age(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }
  public build(): User {
    return this.user;
  }
}

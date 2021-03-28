import { UserBuilder } from "./builder";
import { User } from "./user";

const user: User = new UserBuilder().address("add").build();

console.log(user);
console.log(typeof user);
console.log("hi");

import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
  public move(): void {
    console.log("moving the car");
  }
}

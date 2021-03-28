import { Vehicle } from "./vehicle";

export class Plane implements Vehicle {
  public move(): void {
    console.log("Flying the plane!");
  }
}

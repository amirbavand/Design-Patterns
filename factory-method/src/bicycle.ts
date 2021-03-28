import { Vehicle } from "./vehicle";

export class Bicycle implements Vehicle {
  public move(): void {
    console.log("moving the bicycle");
  }
}

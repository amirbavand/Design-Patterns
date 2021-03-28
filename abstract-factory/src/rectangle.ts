import { Shape } from "./shape";

export class Rectangle implements Shape {
  public draw(): void {
    console.log("this is Rectangle draw");
  }
}

import { Shape } from "./shape";

export class RoundedRectangle implements Shape {
  public draw(): void {
    console.log("this is RoundedRectangle draw");
  }
}

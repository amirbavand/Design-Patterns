import { Shape } from "./shape";

export class Square implements Shape {
  public draw(): void {
    console.log("this is Square draw");
  }
}

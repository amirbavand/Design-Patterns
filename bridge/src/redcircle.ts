import { DrawAPI } from "./drowapi";

export class RedCircle implements DrawAPI {
  public drawCircle(radius: number, x: number, y: number): void {
    console.log(
      "Drawing Circle[ color: red, radius: ",
      radius,
      ", x: ",
      x,
      ", ",
      y,
      "]"
    );
  }
}

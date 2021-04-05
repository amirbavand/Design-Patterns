import { DrawAPI } from "./drowapi";

export class GreenCircle implements DrawAPI {
  public drawCircle(radius: number, x: number, y: number): void {
    console.log(
      "Drawing Circle[ color: green, radius: ",
      radius,
      ", x: ",
      x,
      ", ",
      y,
      "]"
    );
  }
}

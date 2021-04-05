import { Shape } from "./shape";
import { DrawAPI } from "./drowapi";

export class Circle extends Shape {
  private x: number;
  private y: number;
  private radius: number;
  constructor(x: number, y: number, radius: number, drawAPI: DrawAPI) {
    super(drawAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  public draw(): void {
    this.drawAPI.drawCircle(this.radius, this.x, this.y);
  }
}

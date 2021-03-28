import { AbstractFactory } from "./abstractfactory";
import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Square } from "./square";

export class ShapeFactory extends AbstractFactory {
  public getShape(shapeType: string): Shape {
    if (shapeType === "rectangle") {
      return new Rectangle();
    } else if (shapeType === "roundedsquare") {
      return new Square();
    }
    return new Rectangle();
  }
}

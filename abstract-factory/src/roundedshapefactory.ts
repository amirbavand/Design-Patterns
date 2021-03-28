import { AbstractFactory } from "./abstractfactory";
import { Shape } from "./shape";
import { RoundedSquare } from "./roundedsquare";
import { RoundedRectangle } from "./roundrectangle";

export class RoundedShapeFactory extends AbstractFactory {
  public getShape(shapeType: string): Shape {
    if (shapeType === "roundedrectangle") {
      return new RoundedRectangle();
    } else if (shapeType === "roundedsquare") {
      return new RoundedSquare();
    }
    return new RoundedRectangle();
  }
}

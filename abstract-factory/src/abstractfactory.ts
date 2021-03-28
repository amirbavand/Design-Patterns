import { Shape } from "./shape";

export abstract class AbstractFactory {
  abstract getShape(shapeType: string): Shape;
}

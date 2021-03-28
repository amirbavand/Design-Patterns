import { AbstractFactory } from "./abstractfactory";
import { RoundedShapeFactory } from "./roundedshapefactory";
import { ShapeFactory } from "./shapefactory";

export class FactoryProducer {
  public static getFactory(rounded: boolean): AbstractFactory {
    if (rounded) {
      return new RoundedShapeFactory();
    } else {
      return new ShapeFactory();
    }
  }
}

import { FactoryProducer } from "./factoryproducer";

const shapefactory = FactoryProducer.getFactory(false);

const shape1 = shapefactory.getShape("rectangle");
shape1.draw();

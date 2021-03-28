import { Factory } from "./factory";

const a = new Factory().createVehicle("car");
a.move();
const b = new Factory().createVehicle("plane");
b.move();

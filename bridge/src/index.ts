import { Shape } from "./shape";
import { DrawAPI } from "./drowapi";
import { Circle } from "./circle";
import { RedCircle } from "./redcircle";
import { GreenCircle } from "./greencircle";

const redCircle = new Circle(100, 100, 10, new RedCircle());
const greenCircle = new Circle(100, 100, 10, new GreenCircle());

redCircle.draw();
greenCircle.draw();

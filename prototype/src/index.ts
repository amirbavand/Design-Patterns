import { Prototype } from "./prototype";
import { ICloneable } from "./iclone";
let prototype = new Prototype(1);
let pClone = prototype.clone();
console.log(prototype);
console.log(pClone.list);

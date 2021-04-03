import { ICloneable } from "./iclone";
export class Prototype implements ICloneable {
  public identity: any;
  public list: Array<number> = [];

  constructor(id?: number) {
    this.identity = id;

    for (let i = 0; i < 1000; i++) {
      this.list.push(i);
    }
  }

  public clone(): Prototype {
    return Object.create(this);
  }
}

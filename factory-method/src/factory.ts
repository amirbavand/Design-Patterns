import { Car } from "./car";
import { Bicycle } from "./bicycle";
import { Plane } from "./plane";
import { Vehicle } from "./vehicle";

export class Factory {
  public createVehicle(vehicleType: string): Vehicle {
    if (vehicleType === "car") {
      return new Car();
    } else if (vehicleType === "bicycle") {
      return new Bicycle();
    } else if (vehicleType === "plane") {
      return new Plane();
    } else {
      throw new Error("type is wrong");
    }
  }
}

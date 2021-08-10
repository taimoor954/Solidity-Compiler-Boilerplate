const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //constructor function or can say  returns class
const web3 = new Web3(ganache.provider()); //for diff networks use diff provider

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("Car class", () => {
  it("can be parked", () => {
    const car = new Car();
    assert.equal(car.park(), "stopped");
    car.park();
  });
});

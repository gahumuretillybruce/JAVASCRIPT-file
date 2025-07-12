

let car = {
    carName: 'range rover',
    model: 'vellar',
    carWeight: 80,
    engineName: 'turbo',

    start: function () {
        console.log("vrooooooomnmm")
    },

    drive: function () {
        console.log("car is moving")
    },

    brake: function () {
        console.log("krrrrrrr")
    },

    stop: function () {
        console.log("car has stopped")
    }

};

console.log(car);
console.log(car.carName,car.model,car.carWeight,car.engineName);

car.carName;
car.model;
car.carWeight;
car.engineName;

car.start();
car.drive();
car.brake();
car.stop();

let farmer = {
    name : "jaques bavurhe",
    age : 22,
    isRegistered : true,
    greetFarmer : function() {
        console.log("welcome" + " " + this.name + " " + "!!")
    },

    chickRequest : function(quantity){
        console.log(this.name + " " + "requested for"+ " " + quantity + "chicks")
    }
}

console.log(farmer.age)
farmer.greetFarmer()
farmer.chickRequest

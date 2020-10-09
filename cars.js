//Vehicle class stores constructor that has three arguments assigned
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Information method prints information when exectuted
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//cars extends vehicle class which adds information about doors
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//myCar passes information about the make, model, year and doors
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();
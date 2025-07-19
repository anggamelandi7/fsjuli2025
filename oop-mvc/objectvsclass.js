// OBJECT dan class

// let vehicle = {
//     name : "Civic",
//     type : "sedan",
//     price : 1000000,

// };
// console.log(vehicle);

class Vehicle {
    constructor (id,name, type, price, isSold){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isSold =  isSold;

    }
}

// instanciation

let civic = new Vehicle(100, "Civic 2025", "sedan", 1000000, true);
let hino = new Vehicle(101, "hino pickup", "pickup", 5000000, true);
let tiguan = new Vehicle(150, "Tiguan 2021", "suv", 2500000, true);

console.log(civic);
console.log(hino);
console.log(tiguan);

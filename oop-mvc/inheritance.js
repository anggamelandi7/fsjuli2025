// INHERITANCE

class Vehicle {
    constructor (id,name, type, price, isSold){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isSold =  isSold;

    }
}

class sedan extends Vehicle {
    constructor(id, name, price, isSold) {
        super (id,name, "sedan",price, isSold);
        
    }
}
class pickup extends Vehicle {
    constructor(id, name, price, isSold) {
        super (id,name, "pickup",price, isSold);
        
    }
}
class suv extends Vehicle {
    constructor(id, name, price, isSold) {
        super (id,name, "suv",price, isSold);
        
    }
}


// instanciation

let civic = new sedan(100, "Civic 2025", 1000000, true);
let hino = new pickup(101, "hino pickup", 5000000, true);
let tiguan = new suv(150, "Tiguan 2021", 2500000, true);

console.log(civic);
console.log(hino);
console.log(tiguan);
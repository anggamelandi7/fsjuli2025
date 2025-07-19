const Kitchen = require("./Kitchen");

const kitchen = new Kitchen();

kitchen.bake("Chocolate Cake", 17500, "Chocolate");
kitchen.bake("Red Velvet", 12500, "Strawberry");
kitchen.bake("Cats Tongue", 90000, "Sweet");
// console.log(kitchen);
kitchen.eat(3);
kitchen.addSugar(1);
kitchen.showCookies();
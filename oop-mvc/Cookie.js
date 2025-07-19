

// Class Cookie dari Task 1
class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.type = type;
  }
}

// ChocolateCookie: turunan dari Cookie
class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, isSweet) {
    super(id, name, price, ingredients, "Chocolate");
    this.isSweet = isSweet; 
  }
}

// SweetCookie: turunan dari Cookie
class Sweet extends Cookie {
  constructor(id, name, price, ingredients, isSweet) {
    super(id, name, price, ingredients, "Sweet");
    this.isSweet = isSweet;
  }
}

// StrawberryCookie: turunan dari Cookie
class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, isSweet) {
    super(id, name, price, ingredients, "Strawberry");
    this.isSweet = isSweet;
  }
}

module.exports = {Cookie, Chocolate, Strawberry};
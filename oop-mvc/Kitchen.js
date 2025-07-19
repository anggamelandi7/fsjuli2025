const { Chocolate, Sweet, Strawberry } = require("./Cookie");

class Kitchen {
  constructor(containers) {
    this.containers = containers || [];
  }
  bake(name, price, type) {
    // menambahkan cookie
    let id;
    let ingredients = [];
    let isSweet = false;

    if (this.containers.length > 0) {
      id = this.containers[this.containers.length - 1].id + 1;
    } else {
      id = 1;
    }
    switch (type) {
      case "Chocolate":
        this.containers.push(
          new Chocolate(id, name, price, ingredients, isSweet)
        );
        break;
      case "Sweet":
        this.containers.push(new Sweet(id, name, price, ingredients, isSweet));
        break;
      case "Strawberry":
        this.containers.push(
          new Strawberry(id, name, price, ingredients, isSweet)
        );
        break;
    }
    console.log(`"${name}" has been baked.`);
  }
  eat(id) {
    0;
    // menghapus cookie
    this.containers = this.containers.filter((cookie) => cookie.id !== id);
    console.log(`Cookie with id ${id} has been eaten.`);
  }
  addSugar(id) {
    // mengganti cookie

    this.containers = this.containers.map((cookie) => {
      if (cookie.id === id) {
        cookie.isSweet = true;
      }
      return cookie;
    });
    console.log(`Cookie with id ${id} has been sweetened.`);
  }
  showCookies() {
    // menampilkan cookie

    console.log("Our Cookies: ");
    this.containers.forEach((cookie) => {
      const { id, name, price, isSweet } = cookie;
      if (isSweet) {
        console.log(`${id}. [v] ${name} = Rp. ${price}`);
      } else {
        console.log(`${id}. [ ] ${name} = Rp. ${price}`);
      }
    });
  }
}

module.exports = Kitchen;
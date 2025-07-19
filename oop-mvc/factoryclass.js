class fruit {
    constructor (id,name, type, price, stock, category){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.stock =  stock;
        this.category =  category;

    }
}

class Apple extends fruit {
    constructor(id, name, price, stock) {
        super (id,name, price, stock, "Apple");
    }
}
class Orange extends fruit {
    constructor(id, name, price, stock) {
        super (id,name, price, stock, "Orange");
    }
}
class Banana extends fruit {
    constructor(id, name, price, stock) {
        super (id,name, price, stock, "Banana");
    }
}

//Factory Class

class Supermarket {
    constructor(shelves) {
        this.shelves = shelves || [];
    }
    showItems(){
        console.log("Supermarket shelves:");
        if (this.shelves.length > 0) {
           this.shelves.forEach((shelf) => {
            
            // destructuring object
        const { id, name, price, stock, category } = shelf;
        console.log(`${id}. ${name}, Rp. ${price}`);
        console.log(`Stocks = ${stock} pcs. Category = ${category}`);
           }); 
         console.log("======================="); 
        } else {
            console.log("There is no shelf");
        }
    }
    showItemsInTable(){
        console.table(this.shelves);
    }
    addItem(name, price, stock, category){
        let id;
        if (this.shelves.length === 0) {
            id=1;
        } else {
        let lastIndex = this.shelves.length - 1;
        id = this.shelves[lastIndex].id + 1;
        }
        switch (category) {
            case "Apple":
                this.shelves.push(new Apple(id, name, price, stock));
                break;
            case "Orange":
                this.shelves.push(new Orange(id, name, price, stock));
                break;
            case "Banana":
                this.shelves.push(new Banana(id, name, price, stock));
                break;
        }
        }
    deleteItem(id) {
        this.shelves = this.shelves.filter ((shelf) => shelf.id !==id);
    }
    editItem(id, name, price, stock) {
    this.shelves = this.shelves.map((shelf) => {
      if (shelf.id === id) {
        shelf.name = name;
        shelf.price = price;
        shelf.stock = stock;
      }
      return shelf;
    });
      }
}

const supermarket = new Supermarket();
supermarket.addItem("Royal Gala", 75000, 10, "Apple");
supermarket.addItem("Pokan", 75000, 10, "Apple");
supermarket.addItem("Cavendish Supride", 75000, 10, "Apple");caches;
supermarket.addItem("", 75000, 10, "Apple");
supermarket.showItems();

supermarket.showItemsInTable();
console.log(supermarket);


supermarket.deleteItem(2);
supermarket.deleteItem(4);
supermarket.editItem(1, "Apple Gala Royal", 100000, 100);
supermarket.showItems();
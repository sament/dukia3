class Cart {
  constructor(userId) {
    this.userId = userId;
    this.items = [];
    this.createdAt = new Date();
  }

  addItem(itemId, price) {
    let item = {
      id: itemId,
      price: price,
      addedAt: new Date()
    };
    this.items.push(item);
  }

  removeItem(itemId) {
    let index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(itemId, newPrice) {
    let item = this.items.find(item => item.id === itemId);
    if (item) {
      item.price = newPrice;
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

/*let cart = new Cart("user123");
cart.addItem("item1", 10);
cart.addItem("item2", 20);
console.log(cart.getTotal()); // Output: 30
cart.updateItem("item1", 15);
console.log(cart.getTotal()); // Output: 35
cart.removeItem("item2");
console.log(cart.getTotal()); // Output: 15
*/
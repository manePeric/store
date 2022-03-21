class ProductService {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Wc Papir",
        count: 50,
      },
      {
        id: 2,
        name: "Meso",
        count: 100,
      },
      {
        id: 3,
        name: "Jaja",
        count: 240,
      },
      {
        id: 4,
        name: "Cigarete",
        count: 10,
      },
    ];
  }

  getAll() {
    return [...this.products];
  }

  increment(id) {
    const index = this.products.findIndex((prod) => prod.id === id);

    if (index !== -1) {
      this.products[index].count++;
    }

    return this.products[index].count;
  }

  decrement(id) {
    const index = this.products.findIndex((prod) => prod.id === Number(id));

    if (index !== -1 && this.products[index].count > 0) {
      this.products[index].count--;
    }

    return this.products[index].count;
  }

  get(id) {
    const product = this.products.find((prod) => prod.id === Number(id));

    return product ? { ...product } : null;
  }
}

export default new ProductService();

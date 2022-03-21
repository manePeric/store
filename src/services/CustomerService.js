class CustomerService {
  constructor() {
    this.customers = [
      {
        id: 1,
        name: "Nikola",
        lastName: "Nikolic",
        products: [{ id: 4, name: "cigarete" }],
      },
      {
        id: 2,
        name: "Jovana",
        lastName: "Jovanovic",
        products: [
          { id: 3, name: "jaja" },
          { id: 2, name: "meso" },
        ],
      },
      {
        id: 3,
        name: "Pera",
        lastName: "Peric",
        products: [
          { id: 4, name: "cigarete" },
          { id: 1, name: "Wc Papir" },
        ],
      },
    ];
    this.addId = 4;
  }

  getAll() {
    return [...this.customers];
  }

  delete(id) {
    const index = this.customers.findIndex((customer) => customer.id === id);

    if (index === -1) {
      return false;
    }

    this.customers.splice(index, 1);

    return true;
  }

  create(newCustomer) {
    this.customers.push({ id: this.addId, ...newCustomer, products: [] });

    this.addId++;

    return this.customers[this.customers.length - 1];
  }

  get(id) {
    return this.customers.find((cus) => cus.id === Number(id));
  }

  addProduct(id, productName) {
    const index = this.customers.findIndex((cus) => cus.id === Number(id));
    const lastProductId = this.customers[index].products.reduce(
      (lastId, prod) => (lastId > prod.id ? lastId : prod.id),
      -1
    );
    this.customers[index].products.push({
      id: lastProductId + 1,
      name: productName,
    });
  }
}

export default new CustomerService();

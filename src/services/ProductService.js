class ProductService {
    constructor() {
      this.products = [{
        id: 1,
        name: 'Wc Papir',
        count: 50,
      },
    {
        id: 2,
        name: 'Meso',
        count: 100,
    },
    {
        id: 3,
        name: 'Jaja',
        count: 240,
    },
    {
        id: 1,
        name: 'Cigarete',
        count: 10,
    }
    ]
    }
  
    getAll() {
      return [...this.products];
    }
}
 
export default new ProductService();
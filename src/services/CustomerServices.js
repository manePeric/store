class CustomerService{
    constructor(){
        this.customers = [
        {
            id: 1,
            name : 'Nikola',
            lastName : 'Nikolic'    
        },
        {
            id: 2,
            name: 'Jovana',
            lastName: 'Jovanovic'
        },
        {
            id: 3,
            name: 'Pera',
            lastName: 'Peric'
        }
    ]
        this.addId = 4
    }

    getAll(){
        return [...this.customers];
    }

    delete(id) {
        const index = this.customers.findIndex((customer) => customer.id === id);
    
        if (index === -1) {
          return false;
        }
    
        this.customers.splice(index, 1);
    
        return true
    }

    create(newCustomer) {
        this.customers.push({id: this.addId, ...newCustomer, products: []});
  
        this.addId++;
  
        return this.customers[this.customers.length-1];
    }  
}

export default new CustomerService()

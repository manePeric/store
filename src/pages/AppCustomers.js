import React, { useState } from 'react'
import customerService from '../services/CustomerServices'

function AppCustomers() {
  const [customers, setCustomers] = useState(customerService.getAll())

  const [newCustomer, setNewCustomer] = useState({
      name: '',
      lastName: '',
  })
  const deleteCustomer =(id) => {
    const isDeleted = customerService.delete(id)

    if (isDeleted) {
      const index = customers.findIndex(customer => customer.id === id)
      setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)]);
    }
  }

  const addCustomer = (e) => {
      e.preventDefault();

      const newCusto = customerService.create(newCustomer);

      setCustomers([...customers, newCusto])
      
      setNewCustomer({
          name: '',
          lastName: '',
      })

  }

  return (
    <div>
      <ul>
        {customers.map((customer) =>
        <li key={customer.id}>
          <p>Name : {customer.name}</p>
          <p>Last Name : {customer.lastName}</p>
          <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </li>
        )}
      </ul>

      <form onSubmit={addCustomer}>
        <input type="text" value={newCustomer.name} placeholder="Name" onChange={({target}) => setNewCustomer({...newCustomer, name: target.value})}/>
        <input type="text" value={newCustomer.lastName} placeholder="Last Name" onChange={({target}) => setNewCustomer({...newCustomer, lastName: target.value})}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AppCustomers;
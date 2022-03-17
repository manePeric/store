import React, { useState } from 'react'
import customerService from '../services/CustomerServices'

function AppCustomers() {
  const [customers, setCustomers] = useState(customerService.getAll())

  const deleteCustomer =(id) => {
    const isDeleted = customerService.delete(id)

    if (isDeleted) {
      const index = customers.findIndex(customer => customer.id === id)
      setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)]);
    }
  }

  return (
    <div>
      <ul>
        {customers.map((customer) =>
        <li key={customer.id}>
          <span>Name : {customer.name}</span>
          <br></br>
          <span>Last Name : {customer.lastName}</span>
          <br></br>
          <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default AppCustomers;
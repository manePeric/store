import React, { useState } from "react";
import { Link } from "react-router-dom";
import customerService from "../services/CustomerService";

function AppCustomers() {
  const [customers, setCustomers] = useState(customerService.getAll());

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    lastName: "",
  });
  const deleteCustomer = (id) => {
    const isDeleted = customerService.delete(id);

    if (isDeleted) {
      const index = customers.findIndex((customer) => customer.id === id);
      setCustomers([
        ...customers.slice(0, index),
        ...customers.slice(index + 1),
      ]);
    }
  };

  const addCustomer = (e) => {
    e.preventDefault();

    const newCusto = customerService.create(newCustomer);

    setCustomers([...customers, newCusto]);

    setNewCustomer({
      name: "",
      lastName: "",
    });
  };

  return (
    <div>
      <ul>
        {customers.map((customer) => (
          <li
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              padding: 5,
              display: "flex",
              flexDirection: "column",
            }}
            key={customer.id}
          >
            <p>Name : {customer.name}</p>
            <p>Last Name : {customer.lastName}</p>
            <Link to={`/customers/${customer.id}`}>Latest Purchase</Link>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form
        onSubmit={addCustomer}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          marginLeft: 15,
        }}
      >
        <input
          type="text"
          value={newCustomer.name}
          placeholder="Name"
          onChange={({ target }) =>
            setNewCustomer({ ...newCustomer, name: target.value })
          }
        />
        <input
          type="text"
          value={newCustomer.lastName}
          placeholder="Last Name"
          onChange={({ target }) =>
            setNewCustomer({ ...newCustomer, lastName: target.value })
          }
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AppCustomers;

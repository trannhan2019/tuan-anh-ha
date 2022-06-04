import { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/customers');
      const resJson = await res.json();
      setCustomers(resJson);
    };
    fetchData();
  }, []);

  const createCustomer = async ({
    name,
    details,
    gender,
    rating,
  }) => {
    const res = await fetch(`http://localhost:8000/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, details, gender, rating }),
    });
    const data = res.json();
    setCustomers([data, ...customers]);
  };

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:8000/customers/${id}`, {
      method: 'DELETE',
    });
    setCustomers(customers.filter((cus) => cus.id !== id));
  };

  return (
    <CustomerContext.Provider
      value={{ customers, deleteCustomer, createCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;

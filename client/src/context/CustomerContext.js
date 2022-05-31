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

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:8000/customers/${id}`, {
      method: 'DELETE',
    });
    setCustomers(customers.filter((cus) => cus.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;

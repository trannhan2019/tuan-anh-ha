import { createContext, useState, useEffect } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/customers");
      const resJson = await res.json();
      setCustomers(resJson);
    };
    fetchData();
  }, []);

  return (
    <CustomerContext.Provider value={{ customers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;

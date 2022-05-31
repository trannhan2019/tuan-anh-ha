import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerProvider } from "./context/CustomerContext";
import Home from "./pages/home";
import Create from "./pages/create";

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantShop from "./PlantShop";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlantShop />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;

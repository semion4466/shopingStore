import React from "react";

// Add Router to App.js:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import for Footer and Header Components:

import Footer from "./components/partials/footer";
import Header from "./components/partials/header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

// App:

const App = () => {
  return (
    <Router>
      <>
        <Header logo="https://i.pinimg.com/originals/25/f7/05/25f705836ece390d2bcfbc8c68ac441b.jpg" />

        <div className="flex-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>

          <Footer text="Shop" />
        </div>
      </>
    </Router>
  );
};

export default App;

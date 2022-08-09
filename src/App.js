import { Home, Products } from "./pages/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

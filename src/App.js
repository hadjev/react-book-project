import { AboutPage, ErrorPage, Home, SingleBook } from "./pages/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<Books />} /> */}
        <Route path="/books/:isbn" element={<SingleBook />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

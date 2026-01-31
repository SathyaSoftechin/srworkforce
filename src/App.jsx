import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Shared across all pages */}
      <Header />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Shared across all pages */}
      <Footer />
    </>
  );
}

export default App;

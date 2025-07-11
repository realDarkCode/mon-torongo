import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Donation from "./pages/Donation";
import Faq from "./pages/Faq";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <main className="md:p-2 lg:p-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;

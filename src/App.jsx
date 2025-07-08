import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

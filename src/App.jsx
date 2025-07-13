import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register/Register";
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
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;

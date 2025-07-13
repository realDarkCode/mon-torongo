import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import loginImage from "../../assets/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "অনুগ্রহ করে আপনার ইমেইল লিখুন।";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন।";
    }
    if (!password) newErrors.password = "অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন।";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200 font-sans">
      <div className="relative flex flex-col w-full max-w-6xl m-2 bg-light-50 rounded-2xl md:flex-row md:space-y-0 md:min-h-[600px] md:m-6">
        {/* Left side - Image */}
        <div className="relative w-full md:w-2/5 lg:w-1/2 flex justify-center items-center">
          <img
            src={loginImage}
            alt="img"
            className="w-full hidden rounded-l-2xl md:block object-cover"
          />
        </div>
        {/* Right side - Form */}
        <div className="flex flex-col justify-center p-6 md:p-14 w-full md:w-3/5 lg:w-1/2">
          <span className="mb-3 text-4xl font-medium text-neutral-900">
            স্বাগতম, মন তরঙ্গে লগইন করুন
          </span>
          <span className="font-light text-neutral-600 mb-8">
            আপনার মানসিক সহায়ক সর্বদা প্রস্তুত
          </span>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2 lg:space-y-4">
              <span className="text-md text-black font-medium">ইমেইল</span>
              <input
                type="text"
                className={`w-full p-3 border border-neutral-300 rounded-md placeholder:font-light placeholder:text-neutral-500 focus:border-blue-600 focus:outline-none transition-colors duration-300 accent-current ${
                  errors.email ? "border-red-500" : ""
                }`}
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার নিবন্ধিত ইমেইল লিখুন"
              />
              {errors.email && (
                <p className="text-red-500 text-sm ">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col space-y-2 lg:space-y-4">
              <span className="mb-2 text-md text-black font-medium">
                পাসওয়ার্ড
              </span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pass"
                  id="pass"
                  className={`w-full p-3 pr-12 border border-neutral-300 rounded-md placeholder:font-light placeholder:text-neutral-500 focus:border-blue-600 focus:outline-none transition-colors duration-300 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 cursor-pointer transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  className="mr-2 accent-current cursor-pointer"
                />
                <span className="text-md text-neutral-800">
                  পরবর্তীবার স্বয়ংক্রিয়ভাবে লগইন করুন
                </span>
              </div>
              <Link
                className="font-medium text-md text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                to="/forgot-password"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg mb-6 hover:bg-blue-700 transition-colors duration-300 cursor-pointer md: mt-8 lg:mt-10"
            >
              লগইন
            </button>
          </form>
          <div className="text-center text-neutral-600">
            অ্যাকাউন্ট নেই?
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
            >
              {" "}
              সাইন আপ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

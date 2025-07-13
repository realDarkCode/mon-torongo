import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const formVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: Array(6).fill(""),
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSendOtp = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "অনুগ্রহ করে আপনার ইমেইল লিখুন।";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন।";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sending OTP to:", formData.email);
      setOtpSent(true);
      // Add logic to send OTP
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!otpSent) {
      newErrors.otp = "প্রথমে ওটিপি পাঠান।";
    }
    if (formData.otp.join("").length !== 6) {
      newErrors.otp = "সম্পূর্ণ ৬-সংখ্যার ওটিপি প্রয়োজন।";
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "অনুগ্রহ করে নতুন পাসওয়ার্ড লিখুন।";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "পাসওয়ার্ড মেলেনি।";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(
        "Password reset for:",
        formData.email,
        "with data:",
        formData
      );
      // Handle password reset logic here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200 font-sans">
      <div className="relative flex flex-col w-full max-w-lg m-2 bg-light-50 rounded-2xl md:m-6 p-6 md:p-10 lg:p-14">
        <motion.div
          key="forgot-password"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-2xl text-neutral-800 font-semibold text-center underline underline-offset-8">
            পাসওয়ার্ড রিসেট করুন
          </h3>
          <p className="text-sm text-neutral-600 text-center">
            আপনার ইমেইল দিন, ওটিপি দিয়ে নতুন পাসওয়ার্ড সেট করুন।
          </p>
          <form onSubmit={handleResetPassword} className="space-y-4 pt-4">
            <div>
              <label className="text-md font-medium text-black">ইমেইল:</label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 mt-1 border rounded-md ${
                    errors.email ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="আপনার নিবন্ধিত ইমেইল"
                  disabled={otpSent}
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="px-4 py-3 mt-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap"
                >
                  {otpSent ? "পুনরায় পাঠান" : "ওটিপি পাঠান"}
                </button>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium text-black">
                ইমেইলের ওটিপি:
              </label>
              <div className="flex justify-center gap-2 mt-1">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={formData.otp[index] || ""}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className={`w-12 h-14 text-center text-2xl font-bold border rounded-md ${
                        errors.otp ? "border-red-500" : "border-neutral-300"
                      }`}
                      disabled={!otpSent}
                    />
                  ))}
              </div>
              {errors.otp && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {errors.otp}
                </p>
              )}
            </div>
            <div>
              <label className="text-md font-medium text-black">
                নতুন পাসওয়ার্ড:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`w-full p-3 mt-1 pr-12 border rounded-md ${
                    errors.newPassword ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="নতুন পাসওয়ার্ড দিন"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword}</p>
              )}
            </div>
            <div>
              <label className="text-md font-medium text-black">
                পাসওয়ার্ড নিশ্চিত করুন:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-3 mt-1 pr-12 border rounded-md ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-neutral-300"
                  }`}
                  placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              পাসওয়ার্ড রিসেট করুন
            </button>
          </form>
        </motion.div>
        <div className="text-center text-neutral-600 mt-8">
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
          >
            লগইন পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

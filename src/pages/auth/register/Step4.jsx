import { motion } from "framer-motion";
import { useRef } from "react";

const formVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const Step4 = ({ formData, setFormData, errors }) => {
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });

      // Move to next input if a digit is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    console.log("Resending OTP to:", formData.email);
    // Add your resend logic here
  };

  return (
    <motion.div
      key={4}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl text-neutral-800 font-semibold text-center underline underline-offset-8">
        যাচাই এবং সমাপ্তি
      </h3>
      <div>
        <label className="text-md font-medium text-black">ইমেইল ওটিপি</label>
        <p className="text-sm text-neutral-600 mb-2">
          আপনার ইমেইলে পাঠানো ৬-সংখ্যার কোডটি লিখুন।
        </p>
        <div className="flex justify-center gap-2">
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
              />
            ))}
        </div>
        {errors.otp && (
          <p className="text-red-500 text-sm text-center mt-2">{errors.otp}</p>
        )}
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={handleResend}
          className="text-blue-600 hover:underline"
        >
          কোড আবার পাঠান
        </button>
      </div>
      <div className="flex items-center pt-4">
        <input
          type="checkbox"
          name="agreeTerms"
          id="agreeTerms"
          checked={formData.agreeTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeTerms: e.target.checked })
          }
          className="mr-2 accent-brand-blue-600 cursor-pointer"
        />
        <label htmlFor="agreeTerms" className="text-md font-medium text-black">
          আমি <span className="text-blue-600">শর্তাবলী</span>-তে সম্মত
        </label>
      </div>
      {errors.agreeTerms && (
        <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
      )}
    </motion.div>
  );
};

export default Step4;

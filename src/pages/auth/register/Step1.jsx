import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const formVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const Step1 = ({
  formData,
  handleChange,
  errors,
  showPassword,
  setShowPassword,
}) => {
  return (
    <motion.div
      key={1}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-semibold text-center underline underline-offset-8 text-neutral-800">
        ব্যক্তিগত তথ্য
      </h3>
      <div>
        <label className="text-md font-medium text-black">সম্পূর্ণ নাম:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full p-3 mt-1 border rounded-md ${
            errors.fullName ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="আপনার সম্পূর্ণ নাম"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
      </div>
      <div>
        <label className="text-md font-medium text-black">ইমেইল:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 mt-1 border rounded-md ${
            errors.email ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="আপনার ইমেইল"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label className="text-md font-medium text-black">পাসওয়ার্ড:</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 mt-1 pr-12 border rounded-md ${
              errors.password ? "border-red-500" : "border-neutral-300"
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
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      <div>
        <label className="text-md font-medium text-black">
          পাসওয়ার্ড পুনরায় নিশ্চিত করুন:
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-3 mt-1 pr-12 border rounded-md ${
              errors.confirmPassword ? "border-red-500" : "border-neutral-300"
            }`}
            placeholder="পাসওয়ার্ড পুনরায় লিখুন"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Step1;

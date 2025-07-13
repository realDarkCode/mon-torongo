import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../../../assets/register.jpg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    otherGender: "",
    religion: "",
    otherReligion: "",
    profession: "",
    otherProfession: "",
    likedMovies: "",
    futureAmbition: "",
    musicPreference: "",
    frequentThoughts: "",
    otp: Array(6).fill(""),
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "আপনার পূর্ণ নাম প্রয়োজন।";
    if (!formData.email) {
      newErrors.email = "অনুগ্রহ করে আপনার ইমেইল লিখুন।";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন।";
    }
    if (!formData.password)
      newErrors.password = "অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন।";
    else if (formData.password.length < 6) {
      newErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "অনুগ্রহ করে আপনার পাসওয়ার্ড নিশ্চিত করুন।";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "পাসওয়ার্ড মেলেনি।";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.dob) newErrors.dob = "জন্ম তারিখ প্রয়োজন।";
    if (!formData.gender) {
      newErrors.gender = "লিঙ্গ নির্বাচন করুন।";
    } else if (formData.gender === "other" && !formData.otherGender) {
      newErrors.gender = "আপনার লিঙ্গ উল্লেখ করুন।";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (formData.otp.join("").length !== 6) {
      newErrors.otp = "সম্পূর্ণ ৬-সংখ্যার ওটিপি প্রয়োজন।";
    }
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "আপনাকে অবশ্যই শর্তাবলীতে সম্মত হতে হবে।";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    } else if (step === 3) {
      // Step 3 is optional
      setStep(step + 1);
      // Here you would trigger sending the OTP
      console.log("Sending OTP to", formData.email);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "profession" && value !== "other") {
        newFormData.otherProfession = "";
      }
      if (name === "religion" && value !== "other") {
        newFormData.otherReligion = "";
      }
      if (name === "gender" && value !== "other") {
        newFormData.otherGender = "";
      }

      return newFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 4 && validateStep4()) {
      console.log("Form Submitted:", formData);
      // Handle registration logic here
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200 font-sans">
      <div className="relative flex flex-col w-full max-w-6xl m-2 bg-light-50 rounded-2xl md:flex-row md:space-y-0 md:min-h-[600px] md:m-6">
        {/* Left side - Form */}
        <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14 w-full md:w-3/5 lg:w-1/2">
          <span className="mb-3 text-4xl font-medium text-neutral-900">
            মন তরঙ্গে নিবন্ধন করুন
          </span>
          <span className="font-light text-neutral-600 mb-8">
            মন তরঙ্গে আপনার যাত্রা শুরু করুন
          </span>
          <form
            onSubmit={handleSubmit}
            className="relative  accent-brand-600 p-2 lg:p-4"
          >
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </form>
          <div className="flex justify-between items-center mt-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 rounded-lg text-neutral-800 border border-neutral-300 hover:bg-neutral-100 flex items-center"
              >
                <ArrowLeft size={20} className="mr-2" />
                ফিরে যান
              </button>
            ) : (
              <div />
            )}
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    step === s ? "bg-blue-600" : "bg-neutral-300"
                  }`}
                ></div>
              ))}
            </div>
            {step < 4 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center"
              >
                পরবর্তী
                <ArrowRight size={20} className="ml-2" />
              </button>
            )}
            {step === 4 && (
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                নিবন্ধন করুন
              </button>
            )}
          </div>
          <div className="text-center text-neutral-600 mt-8">
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে?
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
            >
              {" "}
              লগইন করুন
            </Link>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="relative w-full md:w-2/5 lg:w-1/2 flex justify-center items-center">
          <img
            src={registerImage}
            alt="img"
            className="w-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

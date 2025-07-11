import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../../components/button"; // Assuming button.jsx is in the same directory
import { modes } from "../../constants";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ModeList = ({ className }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(() => getRandomNumber(0, modes.length - 1) % modes.length);
    }, 2 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={twMerge(
        "grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8 place-items-center grid-flow-row-dense",
        className
      )}
    >
      {modes.map((mode, idx) => (
        <button
          key={mode.id}
          className={twMerge(
            "bg-light-400 text-white transition-all duration-300 ease-in-out py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer  ",
            idx === activeIdx
              ? "bg-white/40  sm:-translate-y-3"
              : "sm:translate-y-0"
          )}
        >
          <img src={mode.imgPath} className="size-4 sm:size-8" />
          <span className="text-xs md:text-sm">{mode.label}</span>
        </button>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-radial  from-[#1E54CD] to-brand-500 flex items-center justify-center text-center text-white p-4 md:rounded-b-2xl lg:rounded-b-3xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">
          আপনার মানসিক স্বাস্থ্য, <br />
          এখন আপনার হাতের মুঠোয়
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-light-200">
          বাংলা ভাষায় AI-চালিত মানসিক সহায়তা, একটি বাংলা ভাষাভিত্তিক AI
          অ্যাপ্লিকেশন, যা আপনাকে ২৪/৭ সময় সঙ্গ দেয়, কথা বলে, সহায়তা করে এবং
          প্রয়োজনীয় রিসোর্স পৌঁছে দেয়, সম্পূর্ণ গোপনীয়তা ও নাম প্রকাশ ছাড়াই।
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            icon
            iconPosition="right"
            iconAnimation={"bounce-right"}
          >
            শুরু করুন
          </Button>
          <Button variant="primary" size="lg">
            আরও জানুন
          </Button>
        </div>
        <ModeList className="lg:mt-25" />
      </div>
    </section>
  );
};

export default Hero;

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "মন তরঙ্গ কী এবং এটি কীভাবে কাজ করে?",
    answer:
      "মন তরঙ্গ একটি AI-চালিত মানসিক স্বাস্থ্য প্ল্যাটফর্ম, যা তরুণ ও শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে। এটি একটি বুদ্ধিমান চ্যাটবট, মুড ট্র্যাকিং, স্ব-মূল্যায়ন টুলস, মেডিটেশন এক্সারসাইজ, এবং এক্সপার্ট সহায়তার মাধ্যমে মানসিক স্বাস্থ্যের উন্নয়নে সহায়তা করে। এটি ব্যবহার করা সহজ, সম্পূর্ণ গোপনীয় এবং ২৪/৭ উপলব্ধ।",
  },
  {
    question: "এই প্ল্যাটফর্মটি ব্যবহার করা কি বিনামূল্যে?",
    answer:
      "হ্যাঁ, মন তরঙ্গের প্রাথমিক ফিচারগুলো যেমন চ্যাটবট, মুড ট্র্যাকিং, ও স্ব-মূল্যায়ন টুলস ব্যবহার করা সম্পূর্ণ বিনামূল্যে। ভবিষ্যতে কিছু প্রিমিয়াম সেবা যুক্ত হতে পারে, কিন্তু আমাদের মূল লক্ষ্য মানসিক স্বাস্থ্যসেবা সবার কাছে সহজলভ্য ও অন্তর্ভুক্তিমূলক রাখা।",
  },
  {
    question: "আমার তথ্য কতটা গোপন এবং সুরক্ষিত থাকবে?",
    answer:
      "ব্যবহারকারীর গোপনীয়তা আমাদের জন্য সর্বোচ্চ গুরুত্বপূর্ণ। মন তরঙ্গের সব কথোপকথন এন্ড-টু-এন্ড এনক্রিপ্টেড এবং ব্যবহারকারীর তথ্য তৃতীয় পক্ষের সাথে কখনোই শেয়ার করা হয় না। আপনি পুরোপুরি বেনামী অবস্থায় প্ল্যাটফর্ম ব্যবহার করতে পারবেন।",
  },
  {
    question: "AI চ্যাটবট কি একজন লাইসেন্সপ্রাপ্ত থেরাপিস্টের বিকল্প?",
    answer:
      "না, AI চ্যাটবট মানসিক স্বাস্থ্যের পেশাদার চিকিৎসকের বিকল্প নয়। এটি একটি প্রাথমিক স্তরের সহায়ক টুল, যা আপনাকে আত্মবিশ্লেষণ, আবেগ নিয়ন্ত্রণ, এবং মানসিক প্রশান্তির পথে এগিয়ে যেতে সহায়তা করে। গুরুতর সমস্যার ক্ষেত্রে একজন পেশাদার থেরাপিস্ট বা মনোরোগ বিশেষজ্ঞের পরামর্শ নেওয়া আবশ্যক।",
  },
  {
    question: "আমি কেন মন তরঙ্গে অনুদান দেব?",
    answer:
      "বাংলাদেশে মানসিক স্বাস্থ্য এখনো অনেকাংশে অবহেলিত ও লজ্জাজনক একটি বিষয়। মন তরঙ্গ এই বাধা ভাঙার চেষ্টা করছে — যাতে তরুণরা গোপনে, নিরাপদে এবং বিনামূল্যে মানসিক সহায়তা পেতে পারে। আপনার অনুদান এই উদ্যোগকে আরও উন্নত, পৌঁছানোর যোগ্য এবং সবার জন্য খোলামেলা করতে সহায়তা করবে।",
  },
  {
    question: "জরুরী মানসিক সহায়তার প্রয়োজন হলে আমি কী করব?",
    answer:
      "আপনি যদি তীব্র মানসিক চাপ, আত্মহত্যার চিন্তা বা জরুরি সহায়তার প্রয়োজন বোধ করেন, অনুগ্রহ করে জাতীয় মানসিক স্বাস্থ্য হটলাইনে যোগাযোগ করুন বা নিকটস্থ হাসপাতালে যান। আমাদের অ্যাপের মধ্যে একটি ইমার্জেন্সি ফিচার রয়েছে যা আপনাকে জরুরি সহায়তা টিমের সঙ্গে সংযুক্ত করতে পারে।",
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutral-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-neutral-800">
          {item.question}
        </h3>
        <ChevronDown
          className={`h-6 w-6 text-brand-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-800">
            সচরাচর জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            আপনার মনে থাকা প্রশ্নগুলোর উত্তর এখানে খুঁজে নিন। আরও কিছু জানার
            থাকলে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

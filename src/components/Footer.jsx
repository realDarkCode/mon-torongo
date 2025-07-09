import { AudioLines, Facebook, MapPin, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      // Handle subscription logic here
      setEmail("");
    }
  };

  return (
    <footer className="w-full text-white">
      <div className="mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
          {/* Left Section */}
          <div className="bg-brand-500 md:rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">মন তরঙ্গ</span>
                  <AudioLines size={32} className="text-white" />
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                বাংলাদেশের তরুণদের জন্য সহজলভ্য, গোপনীয় ও কলঙ্কহীন মানসিক
                স্বাস্থ্য সহায়তা প্ল্যাটফর্ম।
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-xl  mb-4">
                নতুন আপডেট পেতে সাবস্ক্রাইব করুন!
              </h3>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল লিখুন"
                  className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-950  text-white font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap cursor-pointer hover:bg-gray-950"
                >
                  সাবস্ক্রাইব
                </button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-brand-500 md:rounded-3xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Features Column */}
              <div>
                <h4 className="text-lg font-semibold mb-4">ফিচারসমূহ</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      AI চ্যাট সহায়তা
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      মুড ট্র্যাকার
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      রিলাক্সেশন এক্সারসাইজ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      সেলফ অ্যাসেসমেন্ট
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      পিয়ার কমিউনিটি
                    </a>
                  </li>
                </ul>
              </div>

              {/* Misc Column */}
              <div>
                <h4 className="text-lg font-semibold mb-4">অন্যান্য</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      আমাদের সম্পর্কে
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      যোগাযোগ করুন
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      প্রশ্ন ও উত্তর (FAQs)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media and Legal Links */}
            <div className="mt-8 pt-6  ">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  >
                    <MapPin size={20} />
                  </a>
                </div>

                {/* Legal Links */}
                <div className="flex space-x-6 text-sm">
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    শর্তাবলী
                  </a>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    গোপনীয়তা নীতি
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

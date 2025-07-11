import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-neutral-800 text-center mb-16">
          সরাসরি কথা বলুন
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Info, Socials, Map */}
          <div className="bg-neutral-50 p-8 rounded-lg shadow-sm space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-neutral-800">
                    ফোন
                  </h3>
                  <p className="text-neutral-600">+880 1700 000 000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-neutral-800">
                    ইমেইল
                  </h3>
                  <p className="text-neutral-600">contact@montorongo.ai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-neutral-800">
                    ঠিকানা
                  </h3>
                  <p className="text-neutral-600">
                    House 123, Road 45, Gulshan 2, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200"></div>

            {/* Map */}
            <div className="h-80 w-full rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977781987!2d90.34924172643567!3d23.78077774458427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1678886422940!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold  text-neutral-800 mb-6">
              আমাদের একটি বার্তা পাঠান
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  সম্পূর্ণ নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500 bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500 bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  পেশা
                </label>
                <select
                  id="profession"
                  name="profession"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500 bg-white accent-brand-500"
                >
                  <option>পেশা নির্বাচন করুন</option>
                  <option>ছাত্র</option>
                  <option>শিক্ষক</option>
                  <option>অভিভাবক</option>
                  <option>ডেভেলপার</option>
                  <option>ডাক্তার</option>
                  <option>অন্যান্য</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="আপনার বার্তা লিখুন"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500 bg-white"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brand-500 text-white font-bold py-3 px-4 rounded-md hover:bg-brand-600 transition-colors duration-300"
                >
                  জমা দিন
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

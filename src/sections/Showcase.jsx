import showcaseImg1 from "../assets/showcase-1.jpg";
import showcaseImg2 from "../assets/showcase-2.jpg";
import showcaseImg3 from "../assets/showcase-3.jpg";

const Showcase = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-5 lg:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-black mb-4 leading-snug lg:max-w-220 lg:mx-auto">
            মন তরঙ্গ ব্যবহার করে বদলে যাচ্ছে হাজারো জীবনের গল্প
          </h1>

          <p className="text-lg md:text-xl text-light-500 max-w-3xl mx-auto">
            শুধু মানসিক চাপ নয়—আত্মবিশ্বাস, ভালোবাসা আর জীবনের প্রতি টান ফিরে
            পাচ্ছে তরুণ প্রজন্ম।
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {/* Left Column - Team Meeting Image and Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Team Meeting Card */}
            <div className="bg-white rounded-2xl  overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                <img
                  src={showcaseImg1}
                  alt="team-meeting"
                  className="w-full size-fit object-cover"
                />
              </div>
            </div>

            {/* 2M Users Stats */}
            <div className="bg-neutral-200 rounded-2xl  p-6">
              <div className="text-left">
                <div className="text-5xl font-medium text-brand-400 mb-2">
                  20k
                </div>
                <div className="text-neutral-800 font-semibold mb-4">
                  ২০ হাজারের বেশি ব্যবহারকারী
                </div>
                <div className="text-sm text-neutral-800">
                  বিশ্বজুড়ে ব্যবহারকারীরা মানসিক সুস্থতা উন্নয়নে মন-তরঙ্গে
                  ভরসা রাখছেন।
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Testimonial */}
          <div className="lg:col-span-1 relative">
            <div className="bg-white rounded-2xl  overflow-hidden ">
              <div className="aspect-[3/4]  flex items-center justify-center">
                <img
                  src={showcaseImg2}
                  alt="team-meeting"
                  className="w-full object-cover size-fit"
                />
              </div>
              <div className="p-6 absolute inset-0 flex flex-col items-center justify-end">
                <div className="bg-white  p-4 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">M</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      মন-তরঙ্গ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    "সহজ কথোপকথন, নিরাপদ পরামর্শ, এবং মনের যত্নে আপনার
                    নির্ভরযোগ্য সঙ্গী। "
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">জেসিকা লাবান</span>,
                    প্রোডাক্ট ম্যানেজার
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6 flex flex-col sm:flex-row sm:space-x-6 lg:space-x-0 lg:flex-col">
            {/* 90% Stats */}
            <div className="bg-neutral-200 rounded-2xl p-6">
              <div className="text-left">
                <div className="text-5xl font-medium text-brand-400 mb-2">
                  90%
                </div>
                <div className="text-neutral-800 font-semibold mb-4">
                  ৯০% পর্যন্ত কমে ভুলের পরিমাণ
                </div>
                <div className="text-sm text-neutral-800">
                  মন-তরঙ্গের স্মার্ট টুল ব্যবহারে মানসিক সহায়তার গতি ও
                  কার্যকারিতা বেড়ে যায়।
                </div>
              </div>
            </div>

            {/* Team Discussion Card */}
            <div className="bg-white rounded-2xl  overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <img
                  src={showcaseImg3}
                  alt="team-meeting"
                  className="w-full size-fit object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

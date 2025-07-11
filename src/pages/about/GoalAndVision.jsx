import aboutImg1 from "../../assets/about-1.jpg";
import aboutImg2 from "../../assets/about-2.jpg";
const GoalAndVision = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8 space-y-40">
        {/* Our Goal */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium underline text-center underline-offset-4 mb-8 text-neutral-800">
            আমাদের যাত্রা
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                বাংলাদেশে এবং বিশ্বের অনেক অংশেই মানসিক স্বাস্থ্য এখনও একটি
                অবহেলিত ও কলঙ্কিত ক্ষেত্র। বিশেষ করে ১৩ থেকে ২৫ বছর বয়সী তরুণ ও
                শিক্ষার্থীরা ক্রমাগত উদ্বেগ, হতাশা, চাপ ও মানসিক ক্লান্তির মতো
                সমস্যার সম্মুখীন হচ্ছেন। দুঃখজনকভাবে, এই সংকটময় অবস্থা সত্ত্বেও
                অধিকাংশই পেশাদার সাহায্য নেন না। সামাজিক কলঙ্ক, নির্ভরযোগ্য সেবা
                ব্যবস্থার অভাব এবং আর্থিক সীমাবদ্ধতা—এই তিনটি বড় বাধা মানুষকে
                নীরবে ভুগতে বাধ্য করে। বর্তমান স্বাস্থ্যসেবাগুলো প্রায়শই
                শহরকেন্দ্রিক, ব্যয়বহুল এবং তরুণদের জন্য অপ্রস্তুত ও ভীতিকর মনে
                হয়। ফলে লাখ লাখ তরুণ মানসিক যন্ত্রণায় ভুগলেও কোনো সহায়তা পান
                না। আমরা বিশ্বাস করি, মানসিক স্বাস্থ্যও শারীরিক স্বাস্থ্যের মতোই
                গুরুত্বপূর্ণ এবং এর জন্য সবারই নিরাপদ, সহজলভ্য ও দায়িত্বশীল
                সহায়তা পাওয়া উচিত।
              </p>
            </div>
            <div className="order-last lg:order-first">
              <img
                src={aboutImg1}
                alt="Our Goal"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium underline underline-offset-4 mb-8 text-center text-neutral-800">
            আমরা যেভাবে সাহায্য করি
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                আমরা তৈরি করছি একটি AI-ভিত্তিক মানসিক সুস্থতা প্ল্যাটফর্ম, যা
                হবে শিক্ষার্থীদের জন্য একটি ভার্চুয়াল সহচর — সহানুভূতিশীল,
                ব্যক্তিগত এবং গোপনীয়। আমাদের উদ্দেশ্য হল প্রযুক্তির সাহায্যে
                এমন একটি সেবা প্রদান করা, যা stigma ছাড়াই মানুষের মানসিক
                স্বাস্থ্যের যত্ন নিতে সাহায্য করবে। আমাদের অ্যাপে থাকছে একটি
                বুদ্ধিমান চ্যাটবট, যা সংবেদনশীল আলাপচারিতার মাধ্যমে মানসিক
                অবস্থা বিশ্লেষণ করবে এবং বাস্তবভিত্তিক সমাধান দেবে। এতে থাকছে
                বৈজ্ঞানিকভাবে প্রমাণিত এক্সারসাইজ, মুড ট্র্যাকার, সেলফ
                অ্যাসেসমেন্ট টুলস, এবং একটি আনোনিমাস কমিউনিটি, যেখানে
                ব্যবহারকারীরা মুক্তভাবে নিজেদের ভাবনা ও অনুভূতি শেয়ার করতে
                পারবেন। সবশেষে, এমারজেন্সি নোটিফিকেশন সিস্টেম থাকছে, যা সংকটময়
                পরিস্থিতিতে তাৎক্ষণিক সহায়তা নিশ্চিত করবে। আমাদের বিশ্বাস,
                প্রযুক্তির যথাযথ ব্যবহারে আমরা তরুণদের জন্য একটি নিরাপদ,
                বিশ্বাসযোগ্য এবং সহানুভূতিপূর্ণ মানসিক স্বাস্থ্য সহায়তা
                ব্যবস্থা গড়ে তুলতে পারব।
              </p>
            </div>
            <div>
              <img
                src={aboutImg2}
                alt="Our Vision"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalAndVision;

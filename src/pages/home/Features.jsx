import { twMerge } from "tailwind-merge";
import { features } from "../../constants";

function Features() {
  return (
    <section
      className="px-4 py-12 md:px-12 xl:px-16  bg-white text-black mt-5  xl:mt-20"
      id="features"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-medium leading-snug text-black">
          আপনার মানসিক স্বাস্থ্যের যাত্রা ডিজাইন করা,
          <br />
          প্রতিটি মুহূর্তে, প্রতিটি অনুভূতিতে
        </h2>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
        {/* Feature Card */}
        {features.map((feature) => (
          <div
            className={twMerge(
              "bg-light-300 rounded-xl p-6  flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:rotate-[1deg] hover:-rotate-x-2 hover:scale-105 cursor-pointer ring-1 ring-neutral-300",
              "feature-card"
            )}
            key={feature.id}
          >
            <img
              src={feature.icon}
              alt="Track Icon"
              className="size-10 md:size-12 xl:size-15"
            />
            <h3 className="text-lg lg:text-lg xl:text-2xl font-medium text-neutral-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-[12px]  md:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

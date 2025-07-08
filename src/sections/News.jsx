import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { newsItems } from "../constants";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex justify-center items-center flex-col">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-10 leading-snug xl:max-w-160">
        চাপ সহিতে না পেরে ছেড়ে যাচ্ছে প্রাণ—আমরা কি শুনছি তাদের কথা?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              clsx(
                "rounded-2xl overflow-hidden transition-transform duration-300 flex flex-col justify-between max-w-100 md:max-w-full"
              )
            )}
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full  object-fit mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition cursor-pointer xl:px-6 xl:py-3">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;

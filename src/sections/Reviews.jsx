import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { useEffect, useState } from "react";
import { reviewList } from "../constants";

const reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth < 768) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    updateVisibleReviews();
    window.addEventListener("resize", updateVisibleReviews);
    return () => window.removeEventListener("resize", updateVisibleReviews);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev + visibleReviews >= reviewList.length ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, reviewList.length - visibleReviews) : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={
          index < rating ? "fill-brand-400 text-brand-400" : "text-brand-400"
        }
      />
    ));
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleReviews; i++) {
      const index = (currentIndex + i) % reviewList.length;
      visible.push(reviewList[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-black mb-4 leading-tight lg:max-w-200 mx-auto">
            মন তরঙ্গ বদলে দিচ্ছে তরুণ প্রজন্মের মানসিক স্বাস্থ্য নিয়ে ভাবনার
            ধরন
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-black max-w-4xl lg:max-w-170 mx-auto">
            বাংলা ভাষায় AI-চালিত মানসিক সহায়তা, একটি বাংলা ভাষাভিত্তিক AI
            অ্যাপ্লিকেশন, যা আপনাকে ২৪/৭ সময় সঙ্গ দেয়, কথা বলে, সহায়তা করে এবং
            প্রয়োজনীয় রিসোর্স পৌঁছে দেয়, সম্পূর্ণ গোপনীয়তা ও নাম প্রকাশ ছাড়াই।
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-radial from-brand-500  to-brand-400 disabled:opacity-90 disabled:cursor-not-allowed text-white p-3 rounded-lg  transition-all duration-200  size-12 flex items-center justify-center hover:scale-105  cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-radial from-brand-500  to-brand-400 disabled:opacity-90 disabled:cursor-not-allowed text-white p-3 rounded-lg  transition-all duration-200  size-12 flex items-center justify-center hover:scale-105  cursor-pointer"
          >
            <ArrowRight size={24} />
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden px-8">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isAnimating ? "transform" : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleReviews)
                }%)`,
              }}
            >
              {reviewList.map((review) => (
                <div
                  key={review.id}
                  className={`flex-shrink-0 px-4 ${
                    visibleReviews === 1
                      ? "w-full"
                      : visibleReviews === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-2xl  p-6  flex flex-col border-neutral-100 border-2 h-70">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700  flex-grow leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Author Info */}
                    <div className=" flex flex-col justify-end">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>
    </div>
  );
};

export default reviews;

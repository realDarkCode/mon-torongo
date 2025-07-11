import Button from "../../components/button";
import { mentalHealthItems } from "../../constants";

const MentalHealthCards = () => {
  return (
    <section className=" mt-10 md:mt-15 xl:mt-20 bg-radial from-[#1E54CD] to-brand-500 rounded-3xl text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-5 xl:mb-10">
          আপনি কেমন আছেন? নিজেই জানুন
        </h1>
        <p className="text-xs md:text-base max-w-3xl mx-auto">
          এই ছোট টেস্টগুলো (PHQ-9 ও GAD-7) বৈজ্ঞানিকভাবে প্রমাণিত মানসিক স্কেল,
          যা সাহায্য করে আপনার মনের অবস্থা বোঝাতে। কোনো রকম নাম বা তথ্য ছাড়াই,
          সম্পূর্ণ গোপনীয়তায় আপনি এগুলো নিতে পারেন।
        </p>
        <div className="mt-5 md:mt-10 xl:mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mentalHealthItems.map((card, i) => (
            <div
              key={i}
              className="bg-white text-gray-900 rounded-2xl  transform transition duration-500 hover:-rotate-1 hover:shadow-2xl animate-fadeIn"
              style={{
                animationDelay: `${i * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <img
                src={card.img}
                alt="card image"
                className="w-full object-cover rounded-2xl"
              />
              <div className="p-5  flex flex-col justify-between ">
                <h3 className="text-xl font-medium mb-5">{card.title}</h3>
                <p className="text-sm text-light-500 mb-7">
                  {card.description}
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  icon
                  iconPosition="right"
                  className="bg-brand-400 text-white hover:bg-brand-500 hover:text-white"
                >
                  যাচাই করুন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalHealthCards;

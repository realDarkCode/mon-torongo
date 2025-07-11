import { useState } from "react";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");

  const handleSelect = (amount) => {
    setSelectedAmount(amount);
    if (amount !== "custom") setCustomAmount("");
  };

  function getTierText(amount) {
    const num = Number(amount);
    if (num < 500) return "সহানুভূতির বন্ধু";
    else if (num < 1000) return "মানসিক যত্নদাতা";
    else if (num < 2000) return "আশার প্রদীপ";
    else return "সমাধানের স্থপতি";
  }
  const isCustom = selectedAmount === "custom";
  const finalAmount = isCustom ? customAmount : selectedAmount;

  const tiers = [
    { value: 100, label: "সহানুভূতির বন্ধু" },
    { value: 500, label: "সহযোগী বন্ধু" },
    { value: 1000, label: "আশার প্রদীপ" },
    { value: 2500, label: "সমাধানের স্থপতি" },
    { value: 5000, label: "মনরক্ষার দূত" },
    { value: 10000, label: "মূল্যবান পৃষ্ঠপোষক" },
    { value: "custom", label: "নিজস্ব পরিমাণ" },
  ];

  return (
    <section className="bg-neutral-50 min-h-screen w-full py-20 md:py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-medium text-center text-neutral-800 mb-16">
        সহায়তা তহবিল
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT: Description */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-medium text-neutral-800 mb-4">
            মন তরঙ্গ উদ্যোগে অংশগ্রহণ করুন
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            মানসিক স্বাস্থ্যকে সহজলভ্য করতে আমরা একটি উদ্ভাবনী ও দায়িত্বশীল
            প্রযুক্তিভিত্তিক প্ল্যাটফর্ম নির্মাণে কাজ করছি। এই প্রকল্পের অব্যাহত
            উন্নয়ন ও বিস্তারে আপনাদের সহায়তা গুরুত্বপূর্ণ।
          </p>
          <p className="text-neutral-600 mt-3 leading-relaxed">
            প্রতিটি অনুদান সরাসরি উন্নয়ন ব্যয়, প্ল্যাটফর্ম রক্ষণাবেক্ষণ এবং
            পরামর্শদাতা মনোবিদদের সহায়তায় ব্যয় করা হবে।
          </p>

          {/* Payment Methods */}
          <div className="mt-4 border-t border-neutral-300 pt-6 text-neutral-700 space-y-2">
            <h3 className="font-medium text-lg text-neutral-800 mb-3">
              অর্থ প্রেরণের তথ্য
            </h3>
            <p>
              <strong>Bank:</strong> Brac Bank Limited
            </p>
            <p>
              <strong>Account Name:</strong> Mon Torongo
            </p>
            <p>
              <strong>Account No:</strong> 1234 5678 9012
            </p>
            <div className="border-t border-neutral-300"></div>
            <p>
              <strong>Email:</strong> donate@montorongo.org
            </p>
            <p>
              <strong>bKash (Personal):</strong> 017XXXXXXXX
            </p>
            <p>
              <strong>Nagad (Merchant):</strong> 018XXXXXXXX
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                নাম
              </label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                ইমেইল
              </label>
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                অনুদানের পরিমাণ
              </label>
              <div className="grid grid-cols-3 gap-3">
                {tiers.map((tier) => (
                  <button
                    type="button"
                    key={tier.value}
                    onClick={() => handleSelect(tier.value)}
                    className={`py-2.5 rounded-md border font-semibold text-sm transition-colors ${
                      selectedAmount === tier.value
                        ? "bg-brand-500 text-white border-brand-500"
                        : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100"
                    }`}
                  >
                    {tier.value === "custom"
                      ? `${tier.label}`
                      : `৳${tier.value}`}
                  </button>
                ))}
              </div>
            </div>

            {isCustom && (
              <div>
                <input
                  type="number"
                  placeholder="৳ পরিমাণ লিখুন"
                  className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            )}

            {finalAmount && (
              <div className="bg-neutral-900 text-light-50 p-3 rounded-md text-center font-semibold border border-brand-500/20">
                <p className="text-sm">
                  🎖️ আপনার স্তর: {getTierText(finalAmount)}
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                আপনি কেন অনুদান দিতে আগ্রহী তা লিখুন
              </label>
              <textarea
                rows="4"
                placeholder="আপনার অনুদানের কারণ লিখুন..."
                className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-md font-bold transition-colors cursor-pointer"
            >
              অনুদান দিন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

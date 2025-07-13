import { motion } from "framer-motion";

const formVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const Step3 = ({ formData, handleChange }) => {
  return (
    <motion.div
      key={3}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl text-neutral-800 font-semibold text-center underline underline-offset-8">
        আপনার আগ্রহ
      </h3>
      <div>
        <label className="text-md font-medium text-black">
          আপনার পছন্দের সিনেমা:
        </label>
        <textarea
          name="likedMovies"
          value={formData.likedMovies}
          onChange={handleChange}
          className="w-full p-3 mt-1 border rounded-md border-neutral-300"
          placeholder="কমা দিয়ে আলাদা করুন"
        />
      </div>
      <div>
        <label className="text-md font-medium text-black">
          ভবিষ্যতে কী হতে চান?
        </label>
        <textarea
          name="futureAmbition"
          value={formData.futureAmbition}
          onChange={handleChange}
          className="w-full p-3 mt-1 border rounded-md border-neutral-300"
          placeholder="আপনার লক্ষ্য"
        />
      </div>
      <div>
        <label className="text-md font-medium text-black">
          কোন ধরনের গান উপভোগ করেন?
        </label>
        <input
          type="text"
          name="musicPreference"
          value={formData.musicPreference}
          onChange={handleChange}
          className="w-full p-3 mt-1 border rounded-md border-neutral-300"
          placeholder="যেমন: রক, পপ, ক্লাসিক্যাল"
        />
      </div>
      <div>
        <label className="text-md font-medium text-black">
          আপনি সবচেয়ে বেশি কী ভাবেন?
        </label>
        <textarea
          name="frequentThoughts"
          value={formData.frequentThoughts}
          onChange={handleChange}
          className="w-full p-3 mt-1 border rounded-md border-neutral-300"
          placeholder="আপনার চিন্তাভাবনা"
        />
      </div>
    </motion.div>
  );
};

export default Step3;

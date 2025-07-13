import { motion } from "framer-motion";

const formVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const RadioBox = ({ name, value, label, checked, onChange }) => (
  <label
    className={`flex-1 p-3 border rounded-md text-center cursor-pointer transition-colors duration-200 ${
      checked
        ? "bg-blue-200 text-blue-800 border-blue-500 font-semibold"
        : "bg-blue-50 border-blue-200 text-neutral-600"
    }`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    {label}
  </label>
);

const Step2 = ({ formData, handleChange, errors }) => {
  const professions = ["ছাত্র", "শিক্ষক", "ডাক্তার", "প্রকৌশলী", "ব্যবসায়ী"];

  return (
    <motion.div
      key={2}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl  text-neutral-800 font-semibold text-center underline underline-offset-8">
        আপনার সম্পর্কে আরও তথ্য
      </h3>

      <div>
        <label className="text-md font-medium text-black">জন্ম তারিখ:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={`w-full p-3 mt-1 border rounded-md ${
            errors.dob ? "border-red-500" : "border-neutral-300"
          }`}
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </div>

      <div>
        <label className="text-md font-medium text-black mb-2 block">
          লিঙ্গ:
        </label>
        <div className="flex gap-4">
          <RadioBox
            name="gender"
            value="male"
            label="পুরুষ"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <RadioBox
            name="gender"
            value="female"
            label="মহিলা"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <RadioBox
            name="gender"
            value="other"
            label="অন্যান্য"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
        </div>
        {formData.gender === "other" && (
          <input
            type="text"
            name="otherGender"
            value={formData.otherGender}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md border-neutral-300"
            placeholder="আপনার লিঙ্গ উল্লেখ করুন"
          />
        )}
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
        )}
      </div>

      <div>
        <label className="text-md font-medium text-black mb-2 block">
          ধর্ম:
        </label>
        <div className="flex gap-4">
          <RadioBox
            name="religion"
            value="islam"
            label="ইসলাম"
            checked={formData.religion === "islam"}
            onChange={handleChange}
          />
          <RadioBox
            name="religion"
            value="hinduism"
            label="হিন্দুধর্ম"
            checked={formData.religion === "hinduism"}
            onChange={handleChange}
          />
          <RadioBox
            name="religion"
            value="buddhism"
            label="বৌদ্ধধর্ম"
            checked={formData.religion === "buddhism"}
            onChange={handleChange}
          />
          <RadioBox
            name="religion"
            value="christianity"
            label="খ্রিস্টধর্ম"
            checked={formData.religion === "christianity"}
            onChange={handleChange}
          />
          <RadioBox
            name="religion"
            value="other"
            label="অন্যান্য"
            checked={formData.religion === "other"}
            onChange={handleChange}
          />
        </div>
        {formData.religion === "other" && (
          <input
            type="text"
            name="otherReligion"
            value={formData.otherReligion}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md border-neutral-300"
            placeholder="আপনার ধর্ম উল্লেখ করুন"
          />
        )}
      </div>

      <div>
        <label className="text-md font-medium text-black">পেশা:</label>
        <select
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          className="w-full p-3 mt-1 border rounded-md border-neutral-300 bg-blue-50"
        >
          <option value="">নির্বাচন করুন</option>
          {professions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
          <option value="other">অন্যান্য</option>
        </select>
        {formData.profession === "other" && (
          <input
            type="text"
            name="otherProfession"
            value={formData.otherProfession}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md border-neutral-300"
            placeholder="আপনার পেশা উল্লেখ করুন"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Step2;

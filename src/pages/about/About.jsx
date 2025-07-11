import Contact from "./Contact";
import GoalAndVision from "./GoalAndVision";
import Team from "./Team";

const teamHierarchy = {
  name: "জাহিদ খান",
  position: "প্রধান নির্বাহী কর্মকর্তা",
  englishTitle: "Founder & CEO",
  imageUrl: "https://i.pravatar.cc/150?img=1",
  children: [
    // 🔧 Development Department
    {
      name: "সুবিন আহমেদ",
      position: "প্রতিষ্ঠাতা ও ডেভেলপমেন্ট টিম লিড",
      englishTitle: "founder & Development Team Lead",
      imageUrl: "https://i.pravatar.cc/150?img=2",
      children: [
        {
          name: "কামাল উদ্দিন",
          position: "এয়াই ইঞ্জিনিয়ার",
          englishTitle: "AI Engineer",
          imageUrl: "https://i.pravatar.cc/150?img=7",
          children: [],
        },
        {
          name: "রোহানা মাহমুদ",
          position: "মোবাইল অ্যাপ ডেভেলপার",
          englishTitle: "Mobile App Developer",
          imageUrl: "https://i.pravatar.cc/150?img=47",
          children: [],
        },
        {
          name: "ইমরান হাসান",
          position: "ফুল-স্ট্যাক ডেভেলপার",
          englishTitle: "Full-Stack Developer",
          imageUrl: "https://i.pravatar.cc/150?img=18",
          children: [],
        },
      ],
    },

    // 🧠 Mental Health & Clinical Team
    {
      name: "ডা. আনিকা হক",
      position: "ক্লিনিকাল অ্যাডভাইজরি প্রধান",
      englishTitle: "Mental Health Advisor",
      imageUrl: "https://i.pravatar.cc/150?img=4",
      children: [
        {
          name: "ডা. রাইসা রহমান",
          position: "কিশোর মানসিক স্বাস্থ্য পরামর্শক",
          englishTitle: "Adolescent Mental Health Consultant",
          imageUrl: "https://i.pravatar.cc/150?img=38",
          children: [],
        },
      ],
    },

    // 📣 Marketing & Community
    {
      name: "নুসরাত জাহান",
      position: "মার্কেটিং ও কমিউনিটি প্রধান",
      englishTitle: "Marketing & Community Lead",
      imageUrl: "https://i.pravatar.cc/150?img=42",
      children: [
        {
          name: "সানজিদা ইসলাম",
          position: "কমিউনিটি ব্যবস্থাপক",
          englishTitle: "Community Manager",
          imageUrl: "https://i.pravatar.cc/150?img=10",
          children: [],
        },
        {
          name: "আয়েশা সিদ্দিকা",
          position: "কনটেন্ট কৌশলবিদ",
          englishTitle: "Content Strategist",
          imageUrl: "https://i.pravatar.cc/150?img=5",
          children: [],
        },
      ],
    },

    // 🎨 Design & Product
    {
      name: "সালেমন হাসান",
      position: "প্রোডাক্ট ও ডিজাইন প্রধান",
      englishTitle: "Product & Design Lead",
      imageUrl: "https://i.pravatar.cc/150?img=13",
      children: [],
    },
  ],
};

const About = () => {
  return (
    <div className="bg-neutral-50 antialiased">
      <GoalAndVision />
      <Team teamData={teamHierarchy} />
      <Contact />
    </div>
  );
};

export default About;

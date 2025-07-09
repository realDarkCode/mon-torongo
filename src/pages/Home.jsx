import Features from "../sections/Features";
import Intro from "../sections/Intro";
import MentalHealthCards from "../sections/MentalHealth";
import News from "../sections/News";
import Reviews from "../sections/Reviews";
import Showcase from "../sections/Showcase";
import VideoIntro from "../sections/VideoIntro";

const Home = () => {
  return (
    <>
      <Intro />
      <Features />
      <News />
      <Showcase />
      <MentalHealthCards />
      <VideoIntro />
      <Reviews />
    </>
  );
};

export default Home;

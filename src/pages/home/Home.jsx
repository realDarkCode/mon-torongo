import Features from "./Features";
import Intro from "./Intro";
import MentalHealthCards from "./MentalHealth";
import News from "./News";
import Reviews from "./Reviews";
import Showcase from "./Showcase";
import VideoIntro from "./VideoIntro";

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

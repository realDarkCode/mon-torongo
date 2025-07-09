import videoThumbnail from "../assets/video-thumbnail.jpg";
const VideoIntro = () => {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-medium text-black mb-4 mx-auto lg:text-5xl lg:max-w-300 xl:max-w-full">
          যেখানে মন কথা বলে, সেখানেই শুরু আমাদের পথচলা
        </h1>
        <p className="text-sm md:text-lg text-black mb-8">
          এই ভিডিওতে দেখুন মন তরঙ্গ কেমন করে ছুঁয়ে যাচ্ছে তরুণদের জীবন।
        </p>
        <div className="flex justify-center w-full">
          <img
            src={videoThumbnail}
            alt="Mental Health Illustration"
            className="w-full max-w-md md:max-w-2xl  lg:max-w-3 xl:max-w-4xl rounded-lg  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;

const LandingPage = () => {
  return (
    <div className="h-[92vh] w-[100%] flex items-center justify-around bg-amber-100">
      <div
        className="left w-2/5 h-3/4 bg-amber-700"
        data-aos="fade-right"
      ></div>
      <div
        className="right w-2/5 h-3/4 bg-amber-700"
        data-aos="fade-left"
      ></div>
    </div>
  );
};

export default LandingPage;

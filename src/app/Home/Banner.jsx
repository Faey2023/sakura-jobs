
const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[90vh]"
        style={{
          backgroundImage:
            "url(https://assets.gogetfunding.com/wp-content/uploads/2016/01/4990082/img/OsakaBg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 xl:text-5xl md:text-3xl font-bold">
              Discover exciting work opportunities in Japan.
            </h1>
            <p className="mb-5 text-xl lg:text-2xl">
              Unlock Your Potential and Explore Thriving Career Paths in the
              Land of the Rising Sun. From Tech Innovations in Tokyo to Cultural
              Adventures in Kyoto, Your Next Career Move Awaits!
            </p>
            <button className="btn btn-outline text-white hover:bg-teal-600 hover:border-none hover:text-white lg:text-xl">
              Search Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

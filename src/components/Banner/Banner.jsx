const Banner = () => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/k8891fW/5078151.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="text-neutral-content text-start">
          <div className="w-4/3">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              <br />excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

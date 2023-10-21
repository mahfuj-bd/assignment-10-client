
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
        <div className="hero-overlay "></div>

        <div className="text-neutral-content text-start">
          <div 
          className="w-2/5 ml-10">
            <h1 className="mb-5 text-5xl font-bold"> Exploring Tomorrow Tech Today</h1>
            <p className="mb-5">
            Explore the future today at Digital Store and witness the synergy between human creativity and technological advancement. Join us on this journey of discovery and embrace the digital era with open arms. Your technological dreams are just a visit away.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

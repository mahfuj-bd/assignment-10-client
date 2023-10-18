const LatestProduct = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center my-20">Latest Product</h3>
      <div>
        <div className="lg:flex flex-row">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/gVdyPBr/mockup-free-ikg-P7-AQs2r4-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-5 ml-10">
              Where Beauty Meets Beast in Technology
            </h4>
            <p className="leading-8 ml-10">
              Introducing the iPhone 15 Pro Max, where innovation meets
              perfection. Get ready to experience the pinnacle of smartphone
              technology with this flagship device. With its cutting-edge
              features and top-tier performance, the iPhone 15 Pro Max takes
              mobile excellence to a whole new level. Unleash your creativity
              and capture stunning memories with the most advanced camera system
              ever seen in a smartphone. The Pro Maxs photography capabilit
            </p>
          </div>
        </div>
        <div className="lg:flex flex-row">
          <div className="flex-1">
            <h4 className="text-2xl font-semibold my-5">
              YMacBook: Unleash Your Creativity and Productivity
            </h4>
            <p className="leading-8">
              Experience the epitome of design, performance, and innovation with
              the MacBook, a work of art that doubles as a powerful tool.
              Crafted with precision and engineered for excellence, the MacBook
              is more than a laptop; its a gateway to a world of limitless
              possibilities. At its core, the MacBook is driven by Apples
              custom-designed M1 chip, a technological marvel that delivers
              remarkable speed, energy efficiency, and performance. From
              intensive tasks to everyday computing, this MacBook handles it all
              with ease, making it the ideal companion for creative
              professionals and enthusiasts.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co/nmwVW9R/wesson-wang-y0-v-Fx-OHayg-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;

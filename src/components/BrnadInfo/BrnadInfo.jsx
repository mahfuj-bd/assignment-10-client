import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const BrnadInfo = () => {
  const { brand_name } = useParams();

  const [allProducts, setProducts] = useState([]);
  console.log(brand_name);
  console.log(allProducts);
  const products = allProducts.filter(
    (product) => product.brnad_name === brand_name
  );
  console.log(products);

  useEffect(() => {
    fetch("https://assignment-10-server-snowy.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div  className=" my-20  text-center">
        <h1 className="text-3xl font-bold">Our Discounted Products</h1>
        <p className="text-2xl">Available to all brance, flash sell</p>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img 
            src="https://i.ibb.co/zm1M8Xp/pexels-thiago-japyassu-4071887.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/BCDNX75/pexels-life-of-pix-7974.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/L0d3r0t/pexels-freemockupsorg-833337.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Tt66ygB/pexels-karolina-grabowska-5632403.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrnadInfo;

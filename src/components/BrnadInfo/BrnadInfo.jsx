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
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-5xl mx-auto my-10">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        {
            products.map(product => <Product key={product._id} product = {product}></Product>)
        }
        </div>
    </div>
  );
};

export default BrnadInfo;

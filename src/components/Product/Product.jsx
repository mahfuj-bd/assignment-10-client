import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className='w-full h-[300px]' src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions flex justify-between">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary"><Link to={`/details/${product._id}`}></Link>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

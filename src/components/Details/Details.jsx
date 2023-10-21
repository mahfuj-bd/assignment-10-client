import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const product = useLoaderData();
  const {user} = useContext(AuthContext);
  const email = user.email;
  const { image, name, price, rating, description } = product;

  const handleAddToCart = (product, email) =>{
    const { image, name, price, rating, description } = product
    const cartInfo = {
      email,
      image,
      name,
      price, 
      rating, 
      description
    }
    console.log(cartInfo);
    fetch('http://localhost:5000/cart', {
      method: 'POST', 
      headers: {'content-type':'application/json'},
      body: JSON.stringify(cartInfo)
    })
    .then(res =>res.json())
    .then(data =>console.log(data))
  }

  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex">
            <p>$ {price}</p>
            <span>{rating}</span>
          </div>
          <div className="card-actions">
            <button onClick={() =>handleAddToCart(product, email)} className="btn btn-primary w-full">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

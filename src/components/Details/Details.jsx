import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { _id, image, name, price, rating, description } = useLoaderData();

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
            <button className="btn btn-primary w-full">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

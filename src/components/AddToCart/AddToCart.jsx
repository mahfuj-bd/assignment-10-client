import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const AddToCart = () => {
  
  const cart = useLoaderData();
  console.log(cart);
  const { user } = useContext(AuthContext);
  const loadedPurchaseP = cart.filter((c) => c.email === user.email);
  console.log(loadedPurchaseP,user.email);

  const handleDelete = (_id) =>{
    console.log(_id);
    fetch(`https://assignment-10-server-snowy.vercel.app/cart/${_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

  return (
    <div>
      {loadedPurchaseP.map((purchase) => (
        <div key={purchase.id}>
          <div className="max-w-3xl mx-auto">
            <h6 className="text-3xl">{purchase.name}</h6>
            <p className="text-2xl">{purchase._id}</p>
            <button onClick={()=>handleDelete(purchase._id)} className="btn btn-primary">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;

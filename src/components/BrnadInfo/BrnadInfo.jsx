import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrnadInfo = () => {
    const {brand_name} = useParams();
    
    const [products, setProducts] = useState();
    console.log(brand_name);
    console.log(products);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
        
        </div>
    );
};

export default BrnadInfo;
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const brnad_name = form.brnad_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;

        const creatData = {
            image, 
            name, 
            brnad_name,
            description, 
            price,
            rating,
            category
        };
        console.log(creatData);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(creatData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added successfully',
                    icon: 'sucess',                  
                  })
                  form.reset();
            }
        })
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
        <div>
          <h3 className="text-3xl text-center font-bold my-10">Add a product</h3>
        </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="lg:flex flex-row">
              <div className="form-control mr-3">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="lg:flex flex-row">
              <div className="form-control mr-3">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brnad_name"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="lg:flex flex-row">
              <div className="form-control mr-3">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <select name="category" className="select select-bordered w-full max-w-xs">
                <option disabled selected >
                  Category
                </option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Intel</option>
                <option>Google</option>
                <option>Microsoft</option>
                <option>Sony</option>
              </select>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

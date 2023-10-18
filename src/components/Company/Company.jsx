const Company = ({company}) => {

    const {brand_logo, brand_name} = company

  return (
    <div>     
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={brand_logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>                 
        </div>
      </div>
    </div>
  );
};

export default Company;

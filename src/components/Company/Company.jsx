import { Link } from "react-router-dom";

const Company = ({ company }) => {

  return (
    <div>
      <Link to={`/brandinfo/${company.brand_name}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-[250px]" src={company.brand_logo} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{company.brand_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Company;

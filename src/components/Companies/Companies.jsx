import { useEffect, useState } from "react";
import Company from "../Company/Company";

const Companies = () => {
  const [allCompany, setCompany] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCompany(data));
  }, []);
  console.log(allCompany);
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h3 className="text-3xl font-bold my-20 ">category</h3>
      </div>
      <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allCompany.map((company) => (
          <Company key={company.id} company={company}></Company>
        ))}
      </div>
    </div>
  );
};

export default Companies;

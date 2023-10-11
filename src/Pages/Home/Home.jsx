import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const products = useLoaderData() ?? [];
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(products ?? []);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = products.filter((item) => {
      const searchTerm = search.toLowerCase();
      return searchTerm === ""
        ? true
        : item.category.toLowerCase().includes(searchTerm);
    });

    setFilteredProduct(result);
  };

  return (
    <div className="mb-16">
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold ">
          I Grow By Helping People In Need
        </h1>
        <form onSubmit={handleSearch} className="form-control mt-10">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <label className="input-group">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search here...."
              className="input input-bordered border p-3 rounded px-5"
            />
            <input
              className="bg-[#FF444A] p-3 rounded"
              type="submit"
              value="Submit"
            />
          </label>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredProduct.map((item) => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;

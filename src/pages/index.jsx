import React, { useState, useEffect, axios } from "react";
import CardWithImage from "../components/CardWithImage";
import Layout from "../layout/layout";
export const Head = () => <title>Mercadinho</title>;

const IndexPage = () => {
  const ProductList = ({ incrementCount }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the products!", error);
        });
    }, []);

    return (
      <div className="grid justify-items-center gap-4 gap-y-[56px] grid-cols-4">
        {products.map((product) => (
          <CardWithImage
            key={product.id}
            product={product}
            incrementCount={incrementCount}
          />
        ))}
      </div>
    );
  };

  <div className="">
    <Layout />
  </div>;
};

export default IndexPage;

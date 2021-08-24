import React, { useEffect } from "react";

import Data from "./Data";
import { useParams, Link } from "react-router-dom";
const Details = (props) => {
  useEffect(() => {
    props.getItems();
  });

  const { id } = useParams();

  let detailsProduct = props.item.items.find(
    (item) => item._id === parseInt(id)
  );
  return (
    <>
      <div>Hi from details</div>
      <div>
        <img src={`/${detailsProduct.img}`} alt="product" />
        <h4>{detailsProduct.title}</h4>
        <p>{detailsProduct.descripption}</p>
        <p>{detailsProduct.price}</p>
      </div>
      <div>
        <Link to="/products">Back to products</Link>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default Details;

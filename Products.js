import React, { useEffect } from "react";
import Product from "./Product";

import { connect } from "react-redux";

import { getItems, AddToCart } from "./actions/itemActions";

const Products = (props) => {
  useEffect(() => {
    props.getItems();
  }, []);
  const { items } = props.item;

  const AddToCart = (id) => {
    props.AddToCart(id);
  };

  return (
    <div>
      <h3>Products</h3>
      <div style={{ display: "flex" }}>
        {items.map((product) => (
          <Product
            key={product._id}
            data={product}
            AddToCart={() => AddToCart(product._id)}
            isInCart={product.isInCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(Products);

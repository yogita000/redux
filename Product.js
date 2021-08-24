import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { data, AddToCart, isInCart } = props;
  return (
    <>
      {/* <Link to={`/details/${data._id}`}>
        <img src={data.img} />
      </Link> */}

      <div className="col-11 col-md-6 col-lg-3 ">
        <div
          class="card px-2 align-middle overflow-hidden w-100  shadow"
          key={data._id}
        >
          <img
            class="card-img-top  img-fluid text-center"
            src={data.img}
            alt="Card image cap"
            style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
          />
          <div class="card-body text-center">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.description}</p>
            <p>₹ {data.price}</p>
            <button onClick={AddToCart} class="btn btn-success" type="button">
              Add to cart
            </button>
            <div className={isInCart ? "inCart newInCart" : "inCart"}>
              <span>Already in cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

// import React, { useState } from "react";

// import { connect } from "react-redux";
// import { addToCart } from "./shopping/shoppingActions";

// import products from "./data";

// const Product = (props) => {
//   return (
//     <>
// <div className="col-11 col-md-6 col-lg-3">
//   <div class="card px-2 align-middle overflow-hidden w-100  shadow">
//     <img
//       class="card-img-top  img-fluid text-center"
//       src={props.src}
//       alt="Card image cap"
//       style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
//     />
//     <div class="card-body text-center">
//       <h5 class="card-title">{props.title}</h5>
//       <p class="card-text">{props.description}</p>
//       <p>₹ {props.price}</p>
//       <button
//         class="btn btn-success"
//         type="button"
//         onClick={() => addToCart({})}
//       >
//         Add to cart
//       </button>
//     </div>
//   </div>
// </div>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Product);

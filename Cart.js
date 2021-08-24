import React from "react";

import { connect } from "react-redux";

import {
  deleteItem,
  increaseItem,
  decreaseItem,
  getTotals,
} from "./actions/itemActions";
const Cart = (props) => {
  const { cart } = props.item;

  return (
    <>
      <div style={{ display: "flex", justifyItems: "flex-start" }}>
        {/* {Data.length===0 ?  */}
        {/* <h3>Cart is Currently empty</h3> */}
        {cart.map((cart) => (
          <section className="py-4 container ">
            <div className="row " key={cart._id}>
              <div className="col-8">
                <table className="table table-light table-hover m-1">
                  <tbody>
                    <tr>
                      <td>
                        <img src={cart.img} style={{ height: "6rem" }} />
                      </td>
                      <td>{cart.title}</td>
                      <td>{cart.description}</td>
                      <td>₹{cart.price * cart.count}</td>
                      <td>
                        <button
                          className="btn btn-info mx-2"
                          onClick={() => {
                            props.increaseItem(cart._id);
                            props.getTotals();
                          }}
                        >
                          +
                        </button>
                        <span>{cart.count}</span>
                        <button
                          className="btn btn-info ms-2 mx-2"
                          onClick={() => {
                            props.decreaseItem(cart._id);
                            props.getTotals();
                          }}
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-info ms-1"
                          onClick={() => props.deleteItem()}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
        <section>
          <div className="col-4">
            <h3>Product details</h3>

            <h4>
              shipping:
              {props.item.total >= 90 ? (
                <span className="free">free</span>
              ) : (
                `+${props.item.shipping}`
              )}{" "}
            </h4>
            <h4>
              price: $<span>{props.item.total}</span>
            </h4>

            <h4>
              Total price{" "}
              <span>
                $
                {props.item.total >= 90
                  ? props.item.total
                  : props.item.total + props.item.shipping}
              </span>
            </h4>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, {
  deleteItem,
  increaseItem,
  decreaseItem,
  getTotals,
})(Cart);

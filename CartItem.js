import React from "react";
const CartItem = ({ id, title, description, price, img }) => {
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table table-light table-hover m-1">
            <tbody>
              <tr key={id}>
                <td>
                  <img src={img} style={{ height: "6rem" }} />
                </td>
                <td>{title}</td>
                <td>{description}</td>
                <td>₹{price}</td>
                <td>
                  <button
                    className="btn btn-info mx-2"
                    // onClick={() => updateCartUnits({ id, units: units + 1 })}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-info ms-2 mx-2"
                    // onClick={() => updateCartUnits({ id, units: units - 1 })}
                  >
                    -
                  </button>{" "}
                </td>
                <td>
                  <span></span>
                  <button
                    className="btn btn-info ms-1"
                    // onClick={() => removeItem(item.id)}
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
  );
};

export default CartItem;

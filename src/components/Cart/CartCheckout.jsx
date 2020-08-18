import React from "react";
import SubTitle from "../SubTitle";

const CartCheckout = ({ currCart }) => {
  const calculateTotalPrice = () => {
    return currCart
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-checkout pb-5">
      <SubTitle title="TOTAL" />
      <table className="table table-dark">
        <tbody>
          <tr className="d-flex">
            <td className="col-2 border-right d-flex align-items-center justify-content-between">
              <h5>Subtotal:</h5>
              <h5>$0</h5>
            </td>
            <td className="col-4 border-right align-items-center d-flex">
              <select className="form-control" id="additionalOptions">
                <option>Shipping</option>
              </select>
            </td>
            <td className="col-6 d-flex align-items-center justify-content-between">
              <h5>Total:</h5>
              <h5>{"$" + calculateTotalPrice()}</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-danger text-uppercase">checkout</button>
    </div>
  );
};

export default React.memo(CartCheckout);

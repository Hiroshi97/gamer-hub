import React from "react";
import SubTitle from "../SubTitle";
import PropTypes from "prop-types";

const CartCheckout = ({ total }) => {

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
              <h5>{"$" + total}</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-danger text-uppercase">checkout</button>
    </div>
  );
};

CartCheckout.propTypes = {
  total: PropTypes.number
};

export default React.memo(CartCheckout);

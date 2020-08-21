import React from "react";
import SubTitle from "../SubTitle";
import PropTypes from "prop-types";

const CartCheckout = ({ total }) => {
  return (
    <div className="cart-checkout pb-5">
      <SubTitle title="TOTAL" />
      <table className="cart-checkout-table table table-dark">
        <tbody>
          <tr>
            <td className="col-2 border-right align-middle">
              <p className="d-inline-block float-left">Subtotal:</p>
              <p className="d-inline-block float-right">$0</p>
            </td>
            <td className="col-2 border-right align-middle text-center">
              <select id="additionalOptions">
                <option>Shipping</option>
              </select>
            </td>

            <td className="col-8 align-middle">
              <p className="d-inline-block float-left">Total:</p>
              <p className="d-inline-block float-right">{"$" + total}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-danger text-uppercase">checkout</button>
    </div>
  );
};

CartCheckout.propTypes = {
  total: PropTypes.number,
};

export default React.memo(CartCheckout);

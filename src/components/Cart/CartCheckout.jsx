import React from "react";
import SubTitle from "../Reusable/SubTitle";
import PropTypes from "prop-types";

const CartCheckout = ({ total, clearCart }) => {
  const handleResetCart = () => {
    clearCart();
  }
  
  return (
    <div className="cart-checkout pb-5">
      <div className="mb-3">
      <h5 className="text-uppercase">Coupon:</h5>
      <input className="mr-2" placeholder="Enter coupon code..." type="text"/>
      <button className="btn btn-sm btn-danger text-uppercase">Apply</button>
      <button onClick={handleResetCart}className="btn btn-sm btn-light float-right font-weight-bold text-uppercase">Clear Cart</button>
      </div>
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
      <button className="btn btn-danger btn-sm text-uppercase">checkout</button>
    </div>
  );
};

CartCheckout.propTypes = {
  total: PropTypes.number,
  clearCart: PropTypes.func
};

export default React.memo(CartCheckout);

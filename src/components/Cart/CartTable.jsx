import React from "react";
import CartTableHeader from "./CartTableHeader";
import CartTableItem from "./CartTableItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartTable = ({currCart, removeItem, updateQty}) => {

  return (
    <div className="cart-table">
      {currCart && currCart.length > 0 ? (
        <table className="non-empty-table table table-dark ">
          <CartTableHeader />
          <tbody>
            {currCart.map((item) => (
              <CartTableItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                updateQty={updateQty}
              />
            ))}
          </tbody>
        </table>
      ) : (
          <div className="empty-cart text-center mb-5">
            <img src={require("../../assets/empty-shopping-cart.jpg")} />
            <p>
              The cart is empty... like your soul. Fulfill the cart as well as fulfill
              your desire! Go to <Link className="text-danger font-weight-bold" to="/store">STORE</Link> now!
            </p>
          </div>
      )}
    </div>
  );
}

CartTable.propTypes = {
  currCart: PropTypes.array,
  removeItem: PropTypes.func,
  updateQty: PropTypes.func
};

export default React.memo(CartTable);

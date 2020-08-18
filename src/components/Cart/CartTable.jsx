import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartTableHead from "./CartTableHead";
import CartTableItem from "./CartTableItem";
import { RemoveItem, UpdateItemQty } from "../../actions/CartActions";

export default function CartTable() {
  const currCart = useSelector((state) => state.cartState.cart);
  const dispatch = useDispatch();

  const removeItem = useCallback((id) => {
    dispatch(RemoveItem({id}));
  }, []);

  const updateQty = useCallback((id, qty) => {
      dispatch(UpdateItemQty({id, qty}));
  }, [])

  return (
    <div>
      {currCart && currCart.length > 0 ? (
        <table className="cart-table table table-dark">
          <CartTableHead />
          {currCart.map((item) => (
            <CartTableItem item={item} removeItem={removeItem} updateQty={updateQty}/>
          ))}
        </table>
      ) : (
        <p>Empty cart...</p>
      )}
    </div>
  );
}

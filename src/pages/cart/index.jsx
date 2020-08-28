import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/Reusable/PageTitle";
import CartTable from "../../components/Cart/CartTable";
import CartCheckout from "../../components/Cart/CartCheckout";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, UpdateItemQty, ClearCart } from "../../actions/CartActions";
import "./cart.scss";
import { useEffect } from "react";
import { updateCart } from "../../api-call/cartAPI";
import { calculateTotalPrice } from "../../utils/calculate-total-price";

export default function Cart() {
  const currCart = useSelector((state) => state.cartState.cart);
  const isLoggedIn = useSelector((state) => state.authState.result);

  const dispatch = useDispatch();

  const clearCart = useCallback(() => {
    dispatch(ClearCart());
    if (isLoggedIn)
      updateCart();
  }, [])

  const removeItem = useCallback((id) => {
    dispatch(RemoveItem({ id }));
    if (isLoggedIn)
      updateCart();
  }, []);

  const updateQty = useCallback((id, qty) => {
    dispatch(UpdateItemQty({ id, qty }));
    if (isLoggedIn)
      updateCart();
  }, []);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(calculateTotalPrice(currCart));
  }, [currCart]);

  return (
    <div className="container-fluid cart-page">
      <div className="container cart-content pt-5">
        <div className="row cart-custom-breadcrumb">
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-white active">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <PageTitle name="CART" />
        <CartTable
          currCart={currCart}
          removeItem={removeItem}
          updateQty={updateQty}
        />
        {/* CHECKOUT */}
        <CartCheckout total={total} clearCart={clearCart}/>
      </div>
    </div>
  );
}

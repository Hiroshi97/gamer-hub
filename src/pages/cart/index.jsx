import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import CartTable from "../../components/Cart/CartTable";
import CartCheckout from "../../components/Cart/CartCheckout";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, UpdateItemQty, ClearCart } from "../../actions/CartActions";
import "./cart.scss";
import { useEffect } from "react";

export default function Cart() {
  const currCart = useSelector((state) => state.cartState.cart);

  const dispatch = useDispatch();

  const clearCart = useCallback(() => {
    dispatch(ClearCart());
  }, [])

  const removeItem = useCallback((id) => {
    dispatch(RemoveItem({ id }));
  }, []);

  const updateQty = useCallback((id, qty) => {
    dispatch(UpdateItemQty({ id, qty }));
  }, []);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculateTotalPrice = () => {
      return parseFloat(currCart
        .reduce((total, item) => total + item.qty * item.price, 0)
        .toFixed(2));
    };
    
    setTotal(calculateTotalPrice());
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
              <Link to="#" className="text-white active">
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

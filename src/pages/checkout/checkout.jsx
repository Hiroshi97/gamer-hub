import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validation-schema";
import PageTitle from "../../components/Reusable/PageTitle";
import "./checkout.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import CheckoutBillingDetails from "../../components/Checkout/CheckoutBillingDetails";
import CheckoutOrderDetails from "../../components/Checkout/CheckoutOrderDetails";
import { PlaceOrder } from "../../actions/BillActions";

export default function Checkout() {
  const initialValues = useSelector(state => state.billState);
  console.log(initialValues);
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(data) {
      history.push("/cart/checkout/payment");
    },
    enableReinitialize: true
  });
  
  let currentInfo = useRef({...values});

  useEffect(() => {
    currentInfo.current = {...values};
    dispatch(PlaceOrder(values));
  }, [values])

  const isLoggedIn = useSelector((state) => state.authState.result);
  const currCart = useSelector((state) => state.cartState.cart);


  if ((!currCart || currCart.length === 0)) 
    return <Redirect to={{ pathname: "/cart" }} />;

  const renderCouponField = () => {
    return (
      <div className="col-6">
        <h6 className="text-uppercase text-left">Coupon:</h6>
        <input
          className="mr-2"
          placeholder="Enter coupon code..."
          type="text"
        />
        <button className="btn btn-sm btn-danger text-uppercase">Apply</button>
      </div>
    );
  };

  const renderLoginButton = () => {
    return !isLoggedIn ? (
      <div className="col-6 text-right pr-auto">
        <h6 className="text-uppercase">You have an account?</h6>
        <Link to="/login" className="btn btn-sm btn-danger text-uppercase">Login</Link>
      </div>
    ) : null;
  };
  return (
    <div className="container-fluid checkout-page">
      <div className="container checkout-content py-5">
        <div className="row checkout-custom-breadcrumb">
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
            <li>
              <Link to="/cart" className="text-white active">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        <PageTitle name="CHECKOUT" />
        <div className="my-3">
          <div className="row">
            {renderCouponField()}
            {renderLoginButton()}
          </div>
        </div>
        <CheckoutOrderDetails currCart={currCart}/>
        <CheckoutBillingDetails values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}
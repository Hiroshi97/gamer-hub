import React from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart } from "../../actions/CartActions";
import { ClearInfo } from "../../actions/BillActions";
import { updateCart } from "../../api-call/cartAPI";

export default function CheckoutSuccessfulPayment({ open, total }) {
  const billInfo = useSelector((state) => state.billState);
  const isLoggedIn = useSelector((state) => state.authState.result);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    history.push("/");
    dispatch(ClearCart());
    dispatch(ClearInfo());
    if(isLoggedIn) updateCart();     //Clear cart on database
  };
  return (
    <Modal show={open}>
      <Modal.Body>
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <p className="text-center text-success">Payment Successful</p>
        <ul className="list-unstyled">
          <li className="d-flex justify-content-between">
            <p className="font-weight-bold">Receipt Number: </p><p className="font-weight-bold">{Math.random().toString(36).slice(2).toUpperCase()}</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="font-weight-bold">Name: </p><p className="font-weight-bold">{billInfo.fname + " " + billInfo.lname}</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="font-weight-bold">Amount Paid: </p><p className="font-weight-bold">${total}</p>
          </li>
          <li className="d-flex justify-content-between">
            <p className="font-weight-bold">Method: </p><p className="font-weight-bold">{billInfo.payment.toUpperCase()}</p>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={handleClick}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
}

CheckoutSuccessfulPayment.propTypes = {
  open: PropTypes.bool,
  total: PropTypes.number,
};

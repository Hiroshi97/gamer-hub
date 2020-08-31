import React from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { ClearCart } from "../../actions/CartActions";
import { ClearInfo } from "../../actions/BillActions";

export default function CheckoutSuccessfulPayment({ open }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    history.push("/");
    dispatch(ClearCart());
    dispatch(ClearInfo());
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
};

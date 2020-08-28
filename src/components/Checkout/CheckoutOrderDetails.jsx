import React from "react";
import SubTitle from "../Reusable/SubTitle";
import { PropTypes } from "prop-types";
import { calculateTotalPrice } from "../../utils/calculate-total-price";

const CheckoutOrderDetails = ({ currCart }) => {
  return (
    <>
      {currCart && currCart.length > 0 && (
        <div>
          <SubTitle title="ORDER DETAILS" />
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col" className="text-left pl-4">
                  Product(s):
                </th>
                <th scope="col" className="text-right">
                  Total(s):
                </th>
              </tr>
            </thead>
            <tbody>
              {currCart.map((item) => (
                <tr key={item.id}>
                  <td className="text-left pl-4">{item.name}</td>
                  <td className="text-right">{"$" + item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td className="text-left font-weight-bold pl-4">Total:</td>
                <td className="text-right font-weight-bold">
                  {"$" + calculateTotalPrice(currCart)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

CheckoutOrderDetails.propTypes = {
  currCart: PropTypes.array,
};

export default CheckoutOrderDetails;

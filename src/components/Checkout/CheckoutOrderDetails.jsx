import React from "react";
import SubTitle from "../Reusable/SubTitle";
import { PropTypes } from "prop-types";

const CheckoutOrderDetails = ({ currCart, total }) => {
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
                  Qty:
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
                  <td className="text-right">{"x" + item.qty}</td>
                  <td className="text-right">{"$" + item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td className="text-left font-weight-bold pl-4">Total:</td>
                <td>{null}</td>
                <td className="text-right font-weight-bold">
                  {"$" + total}
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
  total: PropTypes.number
};

export default React.memo(CheckoutOrderDetails);

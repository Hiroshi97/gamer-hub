import React from "react";

const CartTableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="col text-center" scope="col">
          Product
        </th>
        <th className="col text-center" scope="col">
          Price
        </th>
        <th className="col text-center" scope="col">
          Quantity
        </th>
        <th className="col text-center" scope="col">
          Total
        </th>
        <th className="col text-center" scope="col"></th>
      </tr>
    </thead>
  );
}

export default React.memo(CartTableHeader);
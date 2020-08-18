import React from 'react';

export default function CartTableHead() {
  return (
        <tr>
          <th className="text-center" scope="col">Product</th>
          <th className="text-center" scope="col">Price</th>
          <th className="text-center" scope="col">Quantity</th>
          <th className="text-center" scope="col">Total</th>
          <th className="text-center"></th>
        </tr>
  );
}

import React, { useState } from "react";
import PropTypes from "prop-types";

const CartTableItem = ({ item, removeItem, updateQty }) => {
  const [itemQty, setItemQty] = useState(item.qty);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleUpdateQty = (id, e) => {
    let currQty = parseInt(e.target.value);
    if (currQty >= 1) {
      updateQty(id, currQty);
      setItemQty(currQty);
    }
  };

  return (
    //Set style inline as Chrome does not support 'col' in tables (Bootstrap)
    <tr>
      <td className="col align-middle">
        <img className="d-inline-block" src={item.img} />
        <p className="d-inline-block">{item.name}</p>
      </td>
      <td className="col align-middle text-center">{"$" + item.price}</td>
      <td className="col align-middle text-center">
        <input
          type="number"
          min="1"
          onChange={(e) => handleUpdateQty(item.id, e)}
          defaultValue={item.qty}
        />
      </td>
      <td className="col align-middle text-center">
        {"$" + (item.price * itemQty).toFixed(2)}
      </td>
      <td className="col">
        <button onClick={() => handleRemoveItem(item.id)}>
          <i className="text-secondary fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

CartTableItem.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func,
  updateQty: PropTypes.func,
};

export default React.memo(CartTableItem);

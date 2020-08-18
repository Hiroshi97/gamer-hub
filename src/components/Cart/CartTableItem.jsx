import React, { useRef, useState } from 'react';
import { useEffect } from 'react';


const CartTableBody = ({item, removeItem, updateQty}) => {
const [qty, setQty] = useState(item.qty);

const handleRemoveItem = (id) => {
  removeItem(id);
}

const handleUpdateQty = (id, e) => {
  e.preventDefault();
  let currQty = parseInt(e.target.value)
  if (currQty >= 1)
    updateQty(id, currQty);
    setQty(currQty);
}

return (
          <tr>
            <td className="align-middle">
              <img className="d-inline-block" src={item.img} />
              <p className="d-inline-block">{item.name}</p>
            </td>
            <td className="align-middle text-center">{item.price}</td>
            <td className="align-middle text-center"><input type="number" min="1" onChange={(e)=>handleUpdateQty(item.id, e)} defaultValue={qty}/></td>
            <td className="align-middle text-center">
              {(item.price * item.qty).toFixed(2)}
            </td>
            <td>
              <button onClick={() => handleRemoveItem(item.id)}><i className="text-secondary fa fa-times"></i></button>
            </td>
          </tr>
    )
}

export default React.memo(CartTableBody);
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    length: parseInt(localStorage.getItem('cart-length')) || 0
}

export default (state = initialState, action) => {
    let currCart = state.cart;
    
    switch (action.type) {
  
    case "ADD_ITEM": {
        
        const index = currCart.findIndex((item) => item.id === action.payload.id)

        const newCart = currCart.map(item => item);

        if (index == -1) {
            newCart.push(action.payload)
        }
        else newCart[index].qty += 1;

        let length = newCart.reduce((total, item) => total + item.qty, 0);
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cart-length', length.toString());
        return { ...state, cart: newCart,  length };
    }

    case "REMOVE_ITEM": {
    
        let newCart = currCart.filter(item => item.id !== action.payload.id);

        let length = newCart.reduce((total, item) => total + item.qty, 0);
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cart-length', length.toString());
        return { ...state, cart: newCart,  length };
    }

    case "UPDATE_QUANTITY": {
        const index = currCart.findIndex(item => item.id === action.payload.id);

        const newCart = currCart.map(item => item);

        newCart[index].qty = action.payload.qty;

        let length = newCart.reduce((total, item) => total + item.qty, 0);

        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cart-length', length.toString());
        return { ...state, cart: newCart,  length };
    }

    case "CLEAR_CART": {
        return {
            cart: [],
            length: 0
        }
    }

    default:
        return state
    }
}

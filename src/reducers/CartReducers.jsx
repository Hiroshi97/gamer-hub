const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    length: localStorage.getItem('cart-length') ? parseInt(localStorage.getItem('cart-length')) : 0
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "ADD_ITEM": {
        let currCart = state.cart;

        const index = currCart.findIndex((item) => item.id === action.payload.id)
        if (index == -1) {
            currCart.push(action.payload)
        }
        else currCart[index].qty += 1;

        let length = currCart.reduce((total, item) => total + item.qty, 0);
        localStorage.setItem('cart', JSON.stringify(currCart));
        localStorage.setItem('cart-length', length.toString());
        return { cart: currCart,  length };
    };

    case "REMOVE_ITEM": {
        let currCart = state.cart;

        currCart = currCart.filter(item => item.id !== action.payload.id);
        
        let length = currCart.reduce((total, item) => total + item.qty, 0);
        localStorage.setItem('cart', JSON.stringify(currCart));
        localStorage.setItem('cart-length', length.toString());
        return { cart: currCart,  length };
    };

    case "UPDATE_QUANTITY": {
        let currCart = state.cart;

        const index = currCart.findIndex(item => item.id === action.payload.id);

        currCart[index].qty = action.payload.qty;

        let length = currCart.reduce((total, item) => total + item.qty, 0);

        localStorage.setItem('cart', JSON.stringify(currCart));
        localStorage.setItem('cart-length', length.toString());
        return { cart: currCart,  length };
    };

    default:
        return state
    }
}

export const AddItem = (payload) => ({
    type: "ADD_ITEM",
    payload
})

export const RemoveItem = (payload) => ({
    type: "REMOVE_ITEM",
    payload
})

export const UpdateItemQty = (payload) => ({
    type: "UPDATE_QUANTITY",
    payload
})

export const ClearCart = () => ({
    type: "CLEAR_CART"
})

export const FetchCart = () => ({
    type: "FETCH_CART"
})
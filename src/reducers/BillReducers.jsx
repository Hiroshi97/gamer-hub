const initialState = {
    fname: "",
    lname: "",
    address: "",
    company: "",
    address2: "",
    email: "",
    phone: "",
    city: "",
    country: "AUSTRALIA",
    state: "",
    postcode: "",
    notes: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "PLACE_ORDER":
        return { ...state, ...payload }

    default:
        return state
    }
}

export default (state = false, action) => {
    switch (action.type) {

    case "LOADING":
        return true;
    
    case "DONE":
        return false;
        
    default:
        return state
    }
}

export default (state = false, action) => {
    switch (action.type) {

    case "LOADING":
        return true;
    
    case "LOADING_SUCCESSFUL":
        return false;
        
    default:
        return state
    }
}

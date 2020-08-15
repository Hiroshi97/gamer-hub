export default (state = false, { type }) => {
    switch (type) {

    case "LOADING":
        return true;
    
    case "LOADING_SUCCESSFUL":
        return false;
        
    default:
        return state
    }
}

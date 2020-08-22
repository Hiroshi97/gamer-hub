export default (state = {loading: false}, action) => {
    switch (action.type) {

    case "FETCH_GAME_REQUEST":
        return {loading: true}
    
    case "FETCH_GAME_SUCCESSFUL":
        return {loading: false}
        
    default:
        return state
    }
}

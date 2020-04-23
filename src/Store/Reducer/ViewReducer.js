const initialState = {
    view: [],
    isLoaded: false
}

function ViewReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'VIEW_LOADED': 
            state = action.value
            nextState = state
            return nextState || state
        default: return state
        
    }
    
}

export default ViewReducer
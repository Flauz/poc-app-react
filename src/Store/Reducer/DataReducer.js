const initialState = {
    data: [],
    isLoaded: true
}


function DataReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'DATA_LOADED': 
            state = action.value
            nextState = state
            return nextState || state
        default: return state
        
    }
    
}

export default DataReducer
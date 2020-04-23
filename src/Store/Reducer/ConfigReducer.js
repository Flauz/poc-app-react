const initialState = {
    config: [],
    isLoaded: false
}


function ConfigReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'CONFIG_LOADED': 
            state = action.value
            nextState = state
            console.log("CONFIG REDUCER:", state)
            return nextState || state
        default: return state
        
    }
    
}

export default ConfigReducer
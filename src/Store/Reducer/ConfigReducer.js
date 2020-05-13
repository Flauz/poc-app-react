const initialState = {
    config: [],
    isLoaded: false
}

function ConfigReducer(state = initialState, action) {
    switch (action.type) {
        case 'CONFIG_LOADED': 
            return {
                ...state,
                config: action.config,
                isLoaded: true
            }
        default: return state 
    }
}

export default ConfigReducer
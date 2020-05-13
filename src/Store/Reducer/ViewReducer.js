const initialState = {
    view: [],
    isLoaded: false
}

function ViewReducer(state = initialState, action) {
    switch (action.type) {
        case 'VIEW_LOADED':
            return {
                ...state,
                view: action.view,
                isLoaded: true
            }
        default: return state
    }
}

export default ViewReducer
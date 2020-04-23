const initialState = {
    pages: [],
    isLoaded: false
}


function PagesReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'PAGES_LOADED': 
            state = action.value
            nextState = state
            console.log('PAGES REDUCER', state)
            return nextState || state
        default: return state
        
    }
    
}

export default PagesReducer
const initialState = {
    pages: [],
    isLoaded: false
}


function PagesReducer(state = initialState, action) {
    switch (action.type) {
        case 'PAGES_LOADED': 
            return {
                ...state,
                pages: action.pages
            }
        default: return state
        
    }
    
}

export default PagesReducer
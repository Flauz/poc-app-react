import { createStore, combineReducers, applyMiddleware } from 'redux'
import DataReducer from './Reducer/DataReducer'
import ConfigReducer from './Reducer/ConfigReducer'
import PagesReducer from './Reducer/PagesReducer'
import ViewReducer from './Reducer/ViewReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    DataReducer,
    ConfigReducer,
    PagesReducer,
    ViewReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


export default store
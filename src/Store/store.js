import {createStore, combineReducers} from 'redux'
import DataReducer from './Reducer/DataReducer'
import ConfigReducer from './Reducer/ConfigReducer'
import PagesReducer from './Reducer/PagesReducer'
import ViewReducer from './Reducer/ViewReducer'


const reducer = combineReducers({
    DataReducer,
    ConfigReducer,
    PagesReducer,
    ViewReducer
})

const store = createStore(reducer)


export default store
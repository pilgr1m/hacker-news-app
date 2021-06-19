import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { newsReducer } from "./reducer"


const reducers = combineReducers({
    news: newsReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window._store_ = store

export default store
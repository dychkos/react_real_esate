import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers/index';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers(reducers)
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
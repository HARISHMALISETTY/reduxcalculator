import {legacy_createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import combineReducer from './reducers';
const store=legacy_createStore(
    combineReducer,
    compose(
        applyMiddleware(thunk,logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);
export default store;
import {combineReducers, createStore} from 'redux';

import commonReducer from '../reducers/CommonReducer';

const AppReducers = combineReducers({
    commonReducer
})

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(rootReducer);

export default store;
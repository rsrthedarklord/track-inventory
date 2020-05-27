import {combineReducers, createStore} from 'redux';

import userIntroReducer from '../reducers/UserIntroReducer';

const AppReducers = combineReducers({
    userIntroReducer
})

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(rootReducer);

export default store;
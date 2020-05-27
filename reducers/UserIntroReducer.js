import * as Actions from '../actions/ActionTypes';

const UserIntroReducer =  (state={userName: ''}, action) => {
    switch(action.type){
        case Actions.ADD_USER_NAME:
            return Object.assign({}, state, {
                userName : action.userName    
            });
        default:
            return state;
    }
}

export default UserIntroReducer;
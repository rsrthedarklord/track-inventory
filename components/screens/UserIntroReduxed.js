import {connect} from 'react-redux';

import * as Actions from '../../actions/ActionTypes';
import UserIntro from './UserIntro';

const mapStateToProps = (state) => {
    return ({
        userName : state.commonReducer.userName
    });
};

const mapDispatchToProps = (dispatch) => ({
    addUserName: ({userName}) => {
        dispatch(addUserNameAction({userName}));
    }
})

export const addUserNameAction = ({userName}) => {
    return {
        type: Actions.ADD_USER_NAME,
        userName
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIntro);
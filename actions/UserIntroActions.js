import {connect} from 'react-redux';

import * as Actions from './ActionTypes';
import UserIntro from '../components/screens/UserIntro';

const mapStateToProps = (state) => {
    return ({
        userName : state.userIntroReducer.userName
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
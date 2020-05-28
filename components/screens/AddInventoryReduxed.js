import {connect} from 'react-redux';

import * as Actions from '../../actions/ActionTypes';
import AddInventory from './AddInventory';

const mapStateToProps = (state) => {
    return ({
        inventories : state.commonReducer.inventories
    });
};

const mapDispatchToProps = (dispatch) => ({
    addInventory: ({newInventory}) => {
        dispatch(addInventoryAction({newInventory}));
    },
    updateInventory: ({updatedInventory}) => {
        dispatch(updateInventoryAction({updatedInventory}));
    }
})

export const addInventoryAction = ({newInventory}) => {
    return {
        type: Actions.ADD_USER_NAME,
        newInventory
    };
}

export const updateInventoryAction = ({updatedInventory}) => {
    return {
        type: Actions.UPDATE_INVENTORY,
        updatedInventory
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInventory);
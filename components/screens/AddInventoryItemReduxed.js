import {connect} from 'react-redux';

import * as Actions from '../../actions/ActionTypes';
import AddInventoryItem from './AddInventoryItem';

const mapStateToProps = (state) => {
    return ({
        inventories : state.commonReducer.inventories,
        inventoryItems : state.commonReducer.inventoryItems
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateInventoryItem: ({updatedInventoryItem}) => {
        dispatch(updateInventoryItemAction({updatedInventoryItem}));
    }
})

export const updateInventoryItemAction = ({updatedInventoryItem}) => {
    return {
        type: Actions.UPDATE_INVENTORY_ITEM,
        updatedInventoryItem
    };
}

export const addInventoryItemAction = ({newInventoryItem}) => {
    return {
        type: Actions.ADD_NEW_INVENTORY_ITEM,
        newInventoryItem
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInventoryItem);
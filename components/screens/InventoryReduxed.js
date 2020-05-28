import {connect} from 'react-redux';

import * as Actions from '../../actions/ActionTypes';
import Inventory from './Inventory';

const mapStateToProps = (state) => {
    return ({
        inventories : state.commonReducer.inventories,
        inventoryItems : state.commonReducer.inventoryItems
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateInventoryItem: ({updatedInventory}) => {
        dispatch(updateInventoryItemAction({updatedInventory}));
    }
})

export const updateInventoryItemAction = ({updatedInventory}) => {
    return {
        type: Actions.UPDATE_INVENTORY_ITEM,
        updatedInventory
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
import * as Actions from '../actions/ActionTypes';
import _ from 'underscore';

const currentDefaultState = {
  userName: "",
  inventories: [
    {
      _id : "x1",  
      name: "Kitchen",
      totalItems: 2, 
      lastUpdatedAt: Date.now() - 86400,
      status: 'ACTIVE'
    },
    {
      _id : "x2",  
      name: "Shop",
      totalItems: 3,
      lastUpdatedAt: Date.now() - 126400,
      status: 'ACTIVE'
    },
  ],
  inventoryItems: [
      {
        _id : 'it1',
        inventoryId: "x1",
        count: 15,
        unit : 'KG'
      },
      {
        _id : 'it2',
        inventoryId: "x1",
        count: 16,
        unit : 'LITRE'
      }
  ],
};

const CommonReducer =  (state=currentDefaultState, action) => {
    let clonedState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case Actions.ADD_USER_NAME:
            clonedState.userName = action.userName;
            return clonedState;

        case Actions.ADD_NEW_INVENTORY:
            clonedState.inventories.push(action.newInventory);
            return clonedState;

        case Actions.UPDATE_INVENTORY:
            let inventory = _.findWhere(clonedState.inventories, {_id: updatedInventory._id});
            _.extend(inventory, updatedInventory);
            return clonedState;

        case Actions.ADD_NEW_INVENTORY_ITEM:
            clonedState.inventoryItems.push(action.newInventoryItem);
            return clonedState;
  
        case Actions.UPDATE_INVENTORY_ITEM:
            let inventoryItem = _.findWhere(clonedState.inventoryItems, {_id: updatedInventoryItem._id});
            _.extend(inventoryItem, updatedInventoryItem);
            return clonedState;

        default:
            return clonedState;
    }
}

export default CommonReducer;
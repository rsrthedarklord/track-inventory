import {AsyncStorage} from 'react-native';

let storeDefaultItems = async () => {
    try {
        await AsyncStorage.setItem(
            'items',
            JSON.stringify([
                {id: "sfs0", title:'Cumin seed', count:0},
                {id: "sfs1", title:'Cumin powder', count: 0},
                {id: "sfs2", title:'Tea leafs', count: 0}
            ])
        );
    } catch (error) {
      // Error saving data
      console.log("Error in store", error);
    }
};

let retriveItems = async () => {
    try {
        let items =  await AsyncStorage.getItem('items');
        return JSON.parse(items);
      } catch (error) {
        // Error retriving data
        console.log("Error in retrieve", error);
      }
}

let setItems = async (items) => {
    try {
        await AsyncStorage.setItem('items', JSON.stringify(items));
      } catch (error) {
        // Error retriving data
        console.log("Error in retrieve", error);
      }
}

export {storeDefaultItems, retriveItems, setItems}
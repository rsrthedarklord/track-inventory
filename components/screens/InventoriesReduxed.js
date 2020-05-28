import {connect} from 'react-redux';

import * as Actions from '../../actions/ActionTypes';
import Inventories from './Inventories';

const mapStateToProps = (state) => {
    return ({
        inventories : state.commonReducer.inventories,
        inventoryItems : state.commonReducer.inventoryItems
    });
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventories);
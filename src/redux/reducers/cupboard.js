import ACTIONS from "./../actions/cupboard";
import _ from "lodash";
import uuid from 'uuid';

const defaultState = {
  items: []
};

const cupboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_ITEM: {
      let item = action.payload;
      let newItem = { id: uuid(), description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.REMOVE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(newState);
      let index = _.findIndex(newState.items, { id: action.payload });
      console.log(index)
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default cupboardReducer;
import ACTIONS from "./../actions/shop";
import _ from "lodash";
import uuid from 'uuid';

// Dummy data
const defaultState = {
  items: [{
    _id: uuid(),
    name: 'Warburtons Seeded Batch Bread 800G',
    price: 160,
    avatarURL: 'https://digitalcontent.api.tesco.com/v1/media/ghs/composite/1182b832-2c80-4211-8e39-2e7d6f11a0a2.jpeg?h=540&w=540'
  }, {
    _id: uuid(),
    name: 'Tesco Lean Beef Steak Mince 5% Fat 250G',
    price: 210,
    avatarURL: 'https://digitalcontent.api.tesco.com/v1/media/ghs/composite/dbeea9a0-0049-4853-9588-ca550cbe5df0.jpeg?h=540&w=540'
  }, {
    _id: uuid(),
    name: 'Tesco Red Kidney Beans 400G',
    price: 55,
    avatarURL: 'https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_1764675730.jpeg?h=540&w=540'
  }, {
    _id: uuid(),
    name: 'Tesco Italian Chopped Tomatoes 400G Ce',
    price: 35,
    avatarURL: 'https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_465529780.jpeg?h=540&w=540'
  }]
};

const shopReducer = (state = defaultState, action) => {
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

export default shopReducer;
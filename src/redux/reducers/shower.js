import ACTIONS from "./../actions/shower";
import _ from "lodash";
// import uuid from 'uuid';

const defaultState = {
    showerVisible: false
};

const showerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.TOGGLE_SHOWER_VISIBILITY: {
      let newState = _.cloneDeep(state);
      newState.showerVisible = !newState.showerVisible;
      return newState;
    }

    default:
      return state;
  }
};

export default showerReducer;
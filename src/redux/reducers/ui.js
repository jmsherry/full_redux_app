import ACTIONS from "./../actions/ui";
import _ from "lodash";
// import uuid from 'uuid';

const defaultState = {
    menuOpen: false
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.TOGGLE_MENU: {
      let newState = _.cloneDeep(state);
      newState.menuOpen = !newState.menuOpen;
      return newState;
    }

    case ACTIONS.Types.OPEN_MENU: {
      let newState = _.cloneDeep(state);
      if (!newState.menuOpen) {
        newState.menuOpen = true;
      }
      return newState;
    }

    case ACTIONS.Types.CLOSE_MENU: {
      let newState = _.cloneDeep(state);
      if (newState.menuOpen) {
        newState.menuOpen = false;
      }
      return newState;
    }

    default:
      return state;
  }
};

export default uiReducer;
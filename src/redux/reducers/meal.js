import ACTIONS from "./../actions/meal";
import _ from "lodash";
import uuid from 'uuid';

const defaultState = {
  meals: []
};

const mealReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_MEAL: {
      console.log(action);

      let meal = action.payload;
      let newMeal = { id: uuid(), description: meal };
      let newState = _.cloneDeep(state);
      newState.meals.push(newMeal);
      return newState;
    }

    case ACTIONS.Types.DELETE_MEAL: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.meals, { id: action.payload });
      newState.meals.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default mealReducer;
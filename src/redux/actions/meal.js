// types of action
const Types = {
  CREATE_MEAL: "CREATE_MEAL",
  DELETE_MEAL: "DELETE_MEAL"
};
// actions
const createMeal = meal => ({
  type: Types.CREATE_MEAL,
  payload: meal
});

const deleteMeal = id => ({
  type: Types.DELETE_MEAL,
  payload: id
});

export default {
  createMeal,
  deleteMeal,
  Types
};

// types of action
const Types = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM"
};
// actions
const createItem = item => ({
  type: Types.ADD_ITEM,
  payload: item
});

const deleteItem = id => ({
  type: Types.REMOVE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  Types
};

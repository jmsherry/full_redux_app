// types of action
const Types = {
  TOGGLE_SHOWER_VISIBILITY: "TOGGLE_SHOWER_VISIBILITY"
};

// action creators
const toggleShowerVisibility = () => ({
  type: Types.TOGGLE_SHOWER_VISIBILITY
});


export default {
  toggleShowerVisibility,
  Types
};
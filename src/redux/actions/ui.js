// types of action
const Types = {
  TOGGLE_MENU: "TOGGLE_MENU",
  OPEN_MENU: "OPEN_MENU",
  CLOSE_MENU: "CLOSE_MENU"
};
// action creators
const toggleMenu = item => ({
  type: Types.TOGGLE_MENU
});

const openMenu = id => ({
  type: Types.OPEN_MENU
});

const closeMenu = id => ({
  type: Types.CLOSE_MENU
});

export default {
  toggleMenu,
  openMenu,
  closeMenu,
  Types
};

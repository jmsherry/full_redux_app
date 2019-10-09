/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import cupboard from './reducers/cupboard';
import meal from './reducers/meal';
import ui from './reducers/ui';
// console.log('cupboard', cupboard);
// console.log('meal', meal);
export default combineReducers({
  cupboard,
  meal,
  ui,
  router,
  // form: formReducer,
  toastr: toastrReducer,
});

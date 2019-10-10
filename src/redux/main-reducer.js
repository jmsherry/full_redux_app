/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import cupboard from './reducers/cupboard';
import meal from './reducers/meal';
import ui from './reducers/ui';
import shop from './reducers/shop';
import shower from './reducers/shower'


export default combineReducers({
  shop,
  cupboard,
  meal,
  ui,
  shower,
  router,
  // form: formReducer,
  toastr: toastrReducer,
});

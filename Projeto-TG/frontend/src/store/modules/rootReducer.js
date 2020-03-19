import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import item from './item/reducer';

export default combineReducers({
  auth,
  user,
  item,
});
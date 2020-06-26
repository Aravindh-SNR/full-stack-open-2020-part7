import { combineReducers } from 'redux';

// Reducers
import blogs from './blogs';
import notification from './notification';
import user from './user';

const rootReducer = combineReducers({ blogs, notification, user });

export default rootReducer;
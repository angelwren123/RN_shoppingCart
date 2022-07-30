import cart2Reducer from './cart2Reducer';
import { combineReducers } from 'redux';
import { notificationReducer } from './notificationReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
    cart2Reducer,
    notificationReducer,
    authReducer
});
export default rootReducer;
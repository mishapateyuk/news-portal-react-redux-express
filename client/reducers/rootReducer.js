import {combineReducers} from 'redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  userData: authReducer,
  news: newsReducer,
  modal: modalReducer,
});

export default rootReducer;

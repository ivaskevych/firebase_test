import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loader from './loader';
import auth from './auth';

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  loader,
});

export default rootReducer;

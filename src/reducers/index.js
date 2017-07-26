import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loader from './loader';

const rootReducer = combineReducers({
  router: routerReducer,
  loader,
});

export default rootReducer;

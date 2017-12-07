import { combineReducers } from 'redux';
import temp from './temp';
import randomWords from './randomWords';

export default combineReducers({
  temp,
  randomWords
});

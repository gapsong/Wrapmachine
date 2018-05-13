import { combineReducers } from 'redux'
import temp from './temp'
import randomWords from './randomWords'
import messages from './messages'

export default combineReducers({
  messages,
  temp,
  randomWords
})

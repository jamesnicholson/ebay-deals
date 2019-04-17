import { combineReducers } from 'redux'
import ebayfeed from './item'
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
  ebayfeed,
  loadingBar: loadingBarReducer,
})
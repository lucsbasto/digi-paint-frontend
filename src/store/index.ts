import { createStore, combineReducers } from 'redux';
import roomReducer from './Room/Room.reducer';

const rootReducer = combineReducers({
  room: roomReducer,
})

const store = createStore(rootReducer)

export default store

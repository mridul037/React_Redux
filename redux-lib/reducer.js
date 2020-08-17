//you can get state by getState meth
import { combineReducers } from "redux";

//action type in top

import {UPDATE_CONTACT,UPDATE_USER} from './action';
const DEFAULT_STATE = { user: {}, contact: [] };
const merge = (prev, next) => Object.assign({}, prev, next);

//reducer takes prev state and gives new state
//reducer=(prev,next)=>merger(prev,next)
//multiple reducer

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload];
  }
  return state;
};

//this reducer responds to two actions

const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) {
    return merge(state, action.payload);
  }
  if (action.type === UPDATE_CONTACT) {
    return merge(state, { newContact: action.payload });
  }
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
});

export default  reducer;

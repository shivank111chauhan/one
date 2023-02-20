import {useState} from 'react';
import {ADDITION, SUBTRACTION} from './ActionType';

// import {addition, subtarction} from './Action';
const initialState = {
  counter: 0,
};

export const mainReducer = (State = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...State, counter: State.counter + Number(action.payload)};
      break;
    case SUBTRACTION:
      return {...State, counter: State.counter - Number(action.payload)};
      break;
    default:
      return State;
      break;
  }
};

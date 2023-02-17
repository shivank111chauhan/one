import {useState} from 'react';
import {ADDITION, SUBTRACTION} from './ActionType';

// import {addition, subtarction} from './Action';
const initialState = {
  counter: 0,
};

export const mainReducer = (State = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...State, counter: State.counter + 1};
      break;
    case SUBTRACTION:
      return {...State, counter: State.counter - 1};
      break;
    default:
      return State;
      break;
  }
};

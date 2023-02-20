import {ADDITION, SUBTRACTION} from './ActionType';

export const addition = counter => ({
  type: ADDITION,
  payload: counter,
});

export const subtarction = counter => ({
  type: SUBTRACTION,
  payload: counter,
});

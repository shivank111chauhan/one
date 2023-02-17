import {createStore} from 'redux';
import {mainReducer} from './Reducer';

export const store = createStore(mainReducer);

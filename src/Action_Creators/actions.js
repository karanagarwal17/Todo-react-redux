

import {CONST} from '../Constants/constants';

export const addTodo = (value) => ({
  type: CONST.ADD_TODO,
  title: value
});
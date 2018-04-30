

import {CONST} from '../Constants/constants';

export const addTodo = (VALUE) => ({
  type: CONST.ADD_TODO,
  title: VALUE
});


export const deleteTodo = (VALUE) => ({
	type: CONST.DEL_TODO,
	ID: VALUE
}

);
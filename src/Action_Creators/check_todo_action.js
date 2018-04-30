

import {CONST} from '../Constants/constants';

export const checkTodo = (VALUE) => ({
	type: CONST.CHECK_TODO,
	ID: VALUE
});
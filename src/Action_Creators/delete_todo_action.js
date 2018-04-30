

import {CONST} from '../Constants/constants';

export const deleteTodo = (VALUE) => ({
	type: CONST.DEL_TODO,
	ID: VALUE
});

import { CONST } from '../Constants/constants'

export const checkTodo = (id, value) => ({
	type: CONST.CHECK_TODO,
	ID: id,
	value: value
})
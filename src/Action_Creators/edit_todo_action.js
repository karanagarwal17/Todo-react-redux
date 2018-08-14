import { CONST } from '../Constants/constants'

export const editTodo = (VALUE) => ({
	type: CONST.EDIT_TODO,
	ID: VALUE
})
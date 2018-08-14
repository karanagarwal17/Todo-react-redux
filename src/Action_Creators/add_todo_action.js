import { CONST } from '../Constants/constants'

export const addTodo = (VALUE) => ({
  type: CONST.ADD_TODO,
  title: VALUE
})
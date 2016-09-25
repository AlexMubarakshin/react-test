import { State } from '../todo.state'
import { NAME } from '../todo.constants'

export const getAllTodos = (state: State) => state[NAME].todos;

import { Todo} from './todo.model';

// This is the model of our module state (e.g. return type of the reducer)
export interface State {
  todos: Todo[],
  visibilityFilter: string
}



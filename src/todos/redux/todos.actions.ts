import * as t from './todos.action-types'

export const add = (text) => ({
  type: t.ADD,
  payload: { text }
});

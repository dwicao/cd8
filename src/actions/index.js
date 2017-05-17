import * as types from './types';

export const addTodo = (payload) => ({
  type: types.ADD_TODO,
  payload,
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

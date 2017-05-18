import * as types from './types';
import uuid from 'uuid';

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: {
    id: uuid.v4(),
    text,
  }
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});

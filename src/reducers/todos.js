import * as types from '../actions/types';
import uuid from 'uuid';

const initialState = [
  {
    id: uuid.v4(),
    text: 'Todo Pertama'
  },
  {
    id: uuid.v4(),
    text: 'Todo Kedua'
  }
];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        action.payload
      ];

    case types.EDIT_TODO: 
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;

        return Object.assign({}, todo, { text: action.text });
      });

    case types.DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    default:
      return state;
  }
};

export default todosReducer;

import { ITodoItem } from "./../components/Todo/interface";
import {
  ADD_TODO,
  CANCEL_UPDATE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "../constants/todoConstant";

const addTodo = (payload: ITodoItem) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const removeTodo = (payload: string) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

const editTodo = (payload: ITodoItem) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};
const updateTodo = (payload: ITodoItem) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

const cancelUpdateTodo = (payload: ITodoItem) => {
  return {
    type: CANCEL_UPDATE_TODO,
    payload,
  };
};

export { addTodo, removeTodo, editTodo, updateTodo, cancelUpdateTodo };

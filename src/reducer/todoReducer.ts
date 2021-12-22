import { ITodoItem } from "./../components/Todo/interface";
import {
  ADD_TODO,
  CANCEL_UPDATE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "../constants/todoConstant";
import { RootState } from "./../app/store";
import { AnyAction } from "redux";
import { resolve } from "dns";
import { rejects } from "assert";

interface TodoState {
  todos: ITodoItem[];
  isAdd: boolean;
  currentTodo: ITodoItem;
  historyTodos: ITodoItem[];
}

const initialState: TodoState = {
  todos: [],
  isAdd: true,
  currentTodo: { id: "", title: "", isUpdateTodo: false },
  historyTodos: [],
};

const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        isAdd: false,
        currentTodo: action.payload,
      };
    case UPDATE_TODO:
      const list = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return todo;
      });
      return {
        ...state,
        isAdd: true,
        todos: [...list],
        historyTodos: [state.currentTodo, ...state.historyTodos],
      };
    case CANCEL_UPDATE_TODO:
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return todo;
      });
      return {
        ...state,
        todos: [...todos],
        isAdd: true,
      };

    default:
      return state;
  }
};

export const listTodo = (state: RootState) => state.todoReducer.todos;
export const isAddTodo = (state: RootState) => state.todoReducer.isAdd;
export const todo = (state: RootState) => state.todoReducer.currentTodo;
export const historyTodos = (state: RootState) =>
  state.todoReducer.historyTodos;

export default todoReducer;

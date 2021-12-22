import { useSelector } from "react-redux";
import { listTodo } from "../../../reducer/todoReducer";
import { ITodoItem } from "../interface";
import TodoItem from "../TodoItem";

function TodoList() {
  const list = useSelector(listTodo);

  return (
    <>
      <h1>LIST TODO</h1>
      {list.map((todo: ITodoItem, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </>
  );
}

export default TodoList;

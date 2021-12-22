import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../../../actions/todoAction";
import { historyTodos } from "../../../reducer/todoReducer";
import { ITodoItem } from "../interface";
import TodoHistory from "../TodoHistory";

interface ITodoItemProps {
  todo: ITodoItem;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const listHistoryUpdateTodo = useSelector(historyTodos);

  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      <div>
        <div>
          Title: <b>{todo.title}</b>
        </div>
        <div>
          {!isShow && todo.isUpdateTodo && (
            <span
              style={{ color: "red", fontSize: 12, cursor: "pointer" }}
              onClick={() => setIsShow(true)}
            >
              Đã chỉnh sửa
            </span>
          )}
          {isShow &&
            listHistoryUpdateTodo.map((historyTodo, index) => {
              if (todo.id === historyTodo.id) {
                return <TodoHistory key={index} historyTodo={historyTodo} />;
              }
              return () => {};
            })}
        </div>
        <button onClick={() => dispatch(editTodo(todo))}>Sửa</button>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Xóa</button>
      </div>
    </>
  );
};

export default TodoItem;

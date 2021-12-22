import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  cancelUpdateTodo,
  updateTodo,
} from "../../../actions/todoAction";
import { todo, isAddTodo } from "../../../reducer/todoReducer";

function Modal() {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const isAdd = useSelector(isAddTodo);
  const currentTodo = useSelector(todo);
  const [titleInput, setTitleInput] = useState("");

  useEffect(() => {
    setTitleInput(currentTodo.title);
    titleInputRef.current?.focus();
  }, [currentTodo]);

  const handleSubmit = () => {
    if (isAdd) {
      if (titleInput !== "") {
        dispatch(
          addTodo({
            id: uuidv4(),
            title: titleInput,
            isUpdateTodo: false,
          })
        );
        setTitleInput("");
        titleInputRef.current?.focus();
      } else {
        titleInputRef.current?.focus();
      }
    } else {
      if (currentTodo.title === titleInput) {
        dispatch(cancelUpdateTodo(currentTodo));
        setTitleInput("");
        titleInputRef.current?.focus();
      } else {
        dispatch(
          updateTodo({
            id: currentTodo.id,
            title: titleInput,
            isUpdateTodo: true,
          })
        );
        setTitleInput("");
        titleInputRef.current?.focus();
      }
    }
  };
  return (
    <>
      <h3>Add Todo</h3>
      <input
        ref={titleInputRef}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <div>
        <button onClick={handleSubmit}>{isAdd ? "ADD" : "SAVE"}</button>
      </div>
    </>
  );
}

export default Modal;

import "./App.css";
import Modal from "./components/Todo/Modal";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Modal />
      <TodoList />
    </div>
  );
}

export default App;

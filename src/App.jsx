import { useEffect, useState } from "react";
import Heading from "./component/Heading";
import Search from "./component/Search";
import TodoList from "./component/TodoList";
import UserContext from "./context/UserContext";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }
  function updateTodo(id, todo) {
    setTodos((prev) =>
      prev.map((oneTodo) => (oneTodo.id === id ? todo : oneTodo))
    );
  }

  function deletetodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo))
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <UserContext.Provider
      value={{ todos, addTodo, updateTodo, deletetodo, toggleCompleted }}
    >
      <div className="bg-gray-900 h-screen w-full flex flex-col justify-center items-center overflow-y-scroll">
        <Heading></Heading>
        <div className="h-screen w-full flex justify-center items-start mt-[30px] ">
          {/* Searching Part */}
          <div className="bg-gray-800 h-auto w-[90%] rounded-t-xl shadow-xs shadow-amber-50">
            <Search></Search>
            {/* Todo List Part */}
            <div className="h-auto w-full p-4 text-gray-900">
              {todos.length === 0 ? (
                <div className="text-center text-xl font-semibold text-gray-400">
                  No Todos Available
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id}>
                    <TodoList todo={todo}></TodoList>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

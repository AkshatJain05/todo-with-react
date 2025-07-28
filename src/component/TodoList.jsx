import { useContext, useState } from "react";
import UserContext from "../contex/UserContext";

function TodoList({ todo }) {
  const { updateTodo, deletetodo, toggleCompleted } = useContext(UserContext);
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  // const [todoDone , setTodoDone] = useState(false)

  function editTodo() {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEdit(false);
  }

  function deleteFun() {
    deletetodo(todo.id);
  }

  function doneTodo() {
    toggleCompleted(todo.id);
  }

  return (
    <>
      <div className="h-auto w-full p-4 text-gray-900 transition-all duration-300 linear hover:shadow-lg hover:shadow-gray-600 rounded-lg mb-4">
        <div
          className={`flex flex-wrap gap-4 ${
            todo.completed ? "bg-green-300" : "bg-blue-100"
          }  p-2 rounded justify-between`}
        >
          <div className="flex w-[70%] gap-5">
            <input
              className="appearance w-5 h-5 bg-white m-1 cursor-pointer"
              type="checkBox"
              onChange={doneTodo}
              checked={todo.completed}
            ></input>
            <div
              className={`flex h-auto flex-wrap mr-1 text-[18px] sm:w-full md:text-xl font-semibold  ${
                todo.completed ? "line-through" : null
              }`}
            >
              <input
                type="text"
                className={`flex flex-wrap w-[160px] sm:block sm:w-full 
                ${
                  isTodoEdit
                    ? "border-2 border-black cursor-text bg-white"
                    : null
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEdit}
              ></input>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* <h3  className="mr-2 text-[17px] font-semibold">20/06/2005</h3> */}
            <button
              onClick={() => {
                if (isTodoEdit) {
                  editTodo();
                } else {
                  setIsTodoEdit((prev) => !prev);
                }
              }}
              className="font-bold bg-white border-1 h-5 w-5 md:h-7 md:w-7 text-[14px]  md:text-[18px] rounded-sm cursor-pointer active:scale-[0.9] "
            >
              {isTodoEdit ? "📁" : "✍"}
            </button>
            <button
              onClick={deleteFun}
              className="font-bold bg-white rounded-sm border-1 h-5 w-5 md:h-7 md:w-7 text-[12px]  md:text-[18px] active:scale-[0.9] cursor-pointer"
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList;

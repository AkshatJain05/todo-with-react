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
      <div className="bg-purple-400 h-auto w-full p-4">
        <div
          className={`flex flex-wrap gap-4 ${
            todo.completed ? "bg-green-200" : "bg-gray-200"
          }  p-2 rounded justify-between`}
        >
          <div className="flex gap-5">
            <input
              className="appearance w-5 h-5 bg-white m-1 cursor-pointer"
              type="checkBox"
              onChange={doneTodo}
              checked={todo.completed}
            ></input>
            <div
              className={`flex h-auto flex-wrap mr-1 text-[18px] md:text-xl font-semibold  ${
                todo.completed ? "line-through" : null
              } `}
            >
              <input
                type="text"
                className={
                  isTodoEdit
                    ? "border-2 border-black cursor-text bg-white"
                    : null
                }
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
              className="font-bold bg-white border-1 h-6 w-6 text-[14px] cursor-pointer"
            >
              {isTodoEdit ? "📁" : "✍"}
            </button>
            <button
              onClick={deleteFun}
              className="font-bold bg-white rounded border-1 h-6 w-6 text-[14px] cursor-pointer"
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

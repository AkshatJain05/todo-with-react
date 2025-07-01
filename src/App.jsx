import { useEffect, useState } from "react";
import Heading from "./component/Heading";
import Search from "./component/Search";
import TodoList from "./component/TodoList";
import UserContext from "./contex/UserContext";


function App() {

  const [todos,setTodos] = useState([]);
 

function addTodo(todo){
      setTodos(prev => [...prev,{id:Date.now(), ...todo}])
}
function updateTodo(id,todo){
     setTodos(prev => prev.map(oneTodo => oneTodo.id === id ? todo:oneTodo))
}

function deletetodo(id){
     setTodos(prev => prev.filter(todo => todo.id !== id))
}

function toggleCompleted(id){
      setTodos(prev => prev.map(todo => todo.id === id ? {...todo,completed:true} : todo))
}

useEffect(()=>{
     const todos = JSON.parse(localStorage.getItem("todos"));
     if(todos && todos.length>0){
      setTodos(todos)
     }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])



  return (
    <UserContext.Provider value={{todos,addTodo,updateTodo,deletetodo,toggleCompleted}}>
      <Heading></Heading>
      <div className=" h-screen w-full flex justify-center items-start mt-[30px] ">
        {/* Searching Part */}
        <div className="bg-purple-800 h-auto w-[90%] rounded-t-xl">
          <Search></Search>
          {/* Todo List Part */}
          {todos.map((todo => (
            <div key={todo.id}>
            <TodoList todo={todo}></TodoList>
            </div>)
            ))}
          
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

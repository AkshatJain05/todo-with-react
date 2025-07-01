import { useContext, useState } from "react";
import UserContext from '../contex/UserContext'


function Search() {
  const {addTodo} = useContext(UserContext)
 const [todo,setTodo] = useState("")

 const add = (e)=>{
  e.preventDefault();
  // if(!todo) return 

  addTodo({todo,completed:false})
  setTodo('')
 }
  return (
    <>
      <div className="flex justify-center items-center h-auto p-5 ">
        <form onSubmit={add}>
        <input
          type="text"
          placeholder="Enter Your Task"
          className="border-2 rounded-l-xl w-[250px] md:w-[500px] h-10 text-xl p-2 bg-gray-200 italic" value={todo} onChange={(e)=> setTodo(e.target.value)}></input>
        <button type="sumbit" className="border-2 bg-green-400 text-xl p-1 pl-2 pr-2 font-semibold rounded-r-xl cursor-pointer" >
          Add
        </button>
        </form>
      </div>
    </>
  );
}
export default Search;

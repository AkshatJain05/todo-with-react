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
          className="border-1 rounded-l-[8px] w-[210px] md:w-[450px] h-11 text-xl p-2  italic bg-blue-100 text-black" value={todo} onChange={(e)=> setTodo(e.target.value)}></input>
        <button type="sumbit" className="border-1 active:scale-[0.9] bg-blue-500 border-black text-white text-xl p-2   pl-3 pr-3  rounded-r-[8px] cursor-pointer" >
          Add
        </button>
        </form>
      </div>
    </>
  );
}
export default Search;


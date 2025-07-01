import {createContext} from 'react'

const UserContext = createContext(
    { 
      todos: [  {
            id:1,
            todo:"todo Msg",
            completed:false
        }],

        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleCompleted: (id)=>{}

    }
)



export default UserContext;
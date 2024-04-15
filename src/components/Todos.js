import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../app/features/todo/todoSlice';





function Todos() {

  const todos =   useSelector(state=> state.todos)
const dispatch = useDispatch();
  const handelDelete = (item)=>{
    dispatch(removeTodo(item.id))
  }
  return (
    <> 
        <h3 className='mt-5  font-bold '>Todo List : {todos.length}</h3>
        <ul className='list-none'>
            {todos.map((todo)=>(
                <li key={todo.id} className='mt-2 mx-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white'> 
                {todo.text}
                <button 
                onClick={()=>handelDelete(todo)}
                className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded' >
                    Delete</button>
                </li>
            ))}
        </ul>
        
    </>

)
}

export default Todos
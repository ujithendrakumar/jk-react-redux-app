import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../app/features/todo/todoSlice";


 const AddTodo = () => {
    const dispatch = useDispatch()
    const [input ,setinput] = useState('')

    const addTodoHandler = (e)=>{
        e.preventDefault();

        dispatch(insertTodo(input));
        setinput('')
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 ">
        <input type='text' className="bg-gray-800 text-white py-1 px-3 text-grey-100 rounded border border-grey-700 
        focus:border-indigo-500 focus:ring-2 foucs:ring-indigo-900 text-base outline-none 
        leading-8  duration-200 ease-in-out"
        placeholder="Enter a todo..." value={input}
        onChange={(e)=>setinput(e.target.value)}
        />
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:db-indigo-600 rounded text-md">
          Add
        </button>
    </form>
  )
}

export default AddTodo;
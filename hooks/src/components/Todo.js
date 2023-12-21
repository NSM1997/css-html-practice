import React, { useState } from 'react'
import uuid from 'react-uuid'
import { TiTick , TiTrash} from "react-icons/ti";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = () => {
    const [todo,setTodo] = useState({
        description : "",
          date:""
    });
    const [todoList, setTodoList] = useState([]);

   const handleTask = (e) =>{
        const key = e.target.name;
        const value = e.target.value;
        setTodo({...todo,[key]:value.toString()})
        console.log(todo)
   }
   const addTask = () =>{
    const updated = {...todo,"id": uuid() , "isDone":false}
       setTodoList([...todoList, updated])
   }
   const markDone = (id) =>{
       const index= todoList.findIndex((task)=> task.id ===id)
       const doneTask =[...todoList]
       doneTask[index].isDone = true;
       setTodoList(doneTask)
   }
   const deleteTask = (id) =>{
      const filteredTask = todoList.filter((task)=> task.id !== id)
      setTodoList(filteredTask)
   }

  return (
    <div>
        <h1>My Todo List</h1>
        <div>
            {"I want to do "} 
            <input type='text'name='description' value={todo.description} onChange={handleTask} /> {"by "} 
            <input type='date' name='date' value={todo.date} onChange={handleTask} />
            <span>
                <button onClick={addTask}>Add a Task</button>
            </span>
        </div>
            {
                todoList.map((item) =>(
                    <>
                    <li key={item.id}>
                       <span style={{textDecoration: item.isDone ? "line-through": ""}}>{item.description} is due by {item.date}</span> 
                       <span><DoneIcon style={{paddingLeft:'5px',marginTop:'5px',height:'2rem',border:'0px'}} onClick={() => markDone(item.id) } /></span>
                       <span><DeleteIcon style={{paddingLeft:'5px',marginTop:'5px'}} onClick={()=>deleteTask(item.id)}/></span>
                    </li>
                    </>

                ))
            }
    </div>
  )
}

export default Todo
import React, { useReducer} from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { formReducer, taskReducer } from './reducer';

const TodoReducer = () => {
    const [todoList, dispatch] = useReducer(taskReducer,[])
    const [todo, dispatcher] = useReducer(formReducer,{
        description : "",
          date:""
    })
    // const [todo,setTodo] = useState({
    //     description : "",
    //       date:""
    // });
    // const [todoList, setTodoList] = useState([]);
   const handleTask = (e) =>{
        dispatcher({
            type: "HANDLE_TASK",
           payload:{
            key: e.target.name,
            value:e.target.value
           }
        })   
   }
   const addTask = () =>{
        dispatch({
            type: "ADD_TASK",
            payload: todo
        })
        dispatcher({
            type: "HANDLE_TASK",
           payload:{
            key: "description",
            value:""
           }
        })   
        dispatcher({
            type: "HANDLE_TASK",
           payload:{
            key: "date",
            value:""
           }
        })   
        // dispatcher({
        //     type:"HANDLE_TASK",
        //     payload:{
        //     key : "description",
        //     value: ""
        //     }
        // })
        // dispatcher({
        //     type:"HANDLE_TASK",
        //     payload:{
        //         key : "date",
        //         value: ""
        //     }
        // })
   }
   const markDone = (id) =>{
       dispatch({
        type: "MARK_DONE",
        payload: id
       })
   }
   const deleteTask = (id) =>{
      dispatch({
        type: "REMOVE_TASK",
        payload: id
      })
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
                    //<>
                    <li key={item.id}>
                       <span style={{textDecoration: item.isDone ? "line-through": ""}}>{item.description} is due by {item.date}</span> 
                       <span><DoneIcon style={{paddingLeft:'5px',marginTop:'5px',height:'2rem',border:'0px'}} onClick={() => markDone(item.id) } /></span>
                       <span><DeleteIcon style={{paddingLeft:'5px',marginTop:'5px'}} onClick={()=>deleteTask(item.id)}/></span>
                    </li>
                    //</>

                ))
            }
    </div>
  )
}

export default TodoReducer
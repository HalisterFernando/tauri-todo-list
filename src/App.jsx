import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  
  const addTask = (task) => {
    setList((prevState) => [...prevState, task])
  }

  const removeTask = ({target: {id}}) => {
    let newList = [...list]
    newList = newList.filter((task, index) => task[index] !== task[id]);    
    setList(() => newList)
  }
  
  const handleChange = ({target: {value}}) => {
    setTask(value)
  }

  return (
    <div className="container">
      <h1>Tauri Todo List</h1>
      <h3>Tasks</h3>
      <div className="list-container">
        <ul>
        {
          list.length > 0 ? 
          list.map((task, index) => <li key={index}>{task}<button id={index} onClick={(ev) => removeTask(ev)}>Delete</button></li> ) : 
           'No tasks'
        }
        </ul>
      </div>
      <div className="input-container">
        <input type="text" value={task} onChange={handleChange}/>
        <button onClick={() => addTask(task)}>Add a task</button>
      </div>
      
    </div>
  );
}

export default App;

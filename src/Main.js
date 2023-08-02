import { useState, useEffect } from "react";
import "./main.css";

import {v4 as uuidv4} from "uuid";
import List from "./components/List";
import CurrentDate from "./components/CurrentDate";

const Main = () => {
  const [tasks, setTasks] = useState(()=>{
    const storedTodos = localStorage.getItem('tasks');
    if(!storedTodos){
      return []
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [tasksTitle, setTasksTitle] = useState("");

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const addTask = (e) =>{
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
      if(e.key === 'Enter' && e.target.value !== ''){
      setTasks([...storedTodos, {
        id: uuidv4(),
        title: tasksTitle,
        status: false
      }])
      setTasksTitle('');
    }
  }

  return (
    <div className="container">
      <h1 className="main__title">Note your tasks</h1>
      <CurrentDate />
      <div>
        <input
          type="text"
          className="main__task"
          value={tasksTitle}
          onChange={(event) => setTasksTitle(event.target.value)}
          onKeyDown ={addTask}
        />
        <label className="main__label">Task name</label>
      </div>
      <List tasks={tasks} />
    </div>
  );
};

export default Main;

import { useState, useEffect } from "react";
import "./main.css";

import {v4 as uuidv4} from "uuid";
import List from "./components/List";

const Main = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: "Clean", status: false },
  ]);

  const [tasksTitle, setTasksTitle] = useState("");

  const addTask = (e) =>{
    if(e.key === 'Enter' && e.target.value !== ''){
      setTasks([...tasks, {
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

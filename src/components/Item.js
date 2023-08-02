import { useState } from "react";

import "./item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Item = ({ title, id, status }) => {
  const [checked, setCheked] = useState(status);
  const [visible, setVisible] = useState(true);
  const classes = ["todo__item-title"];

  if (checked) {
    classes.push("done");
  }

  const updateStatus = () => {
    setCheked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked;
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(storedTodos));
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    let removeTodos = storedTodos.filter(item => {
      if(item.id !== id){
        return true;
      }
      return false;
    })
    localStorage.setItem('tasks', JSON.stringify(removeTodos));
  };

  return (
    <>
      {visible && (
        <li className="todo">
          <label className="todo__label">
            <input
              type="checkbox"
              className="check"
              checked={checked}
              onChange={updateStatus}
            />
            <span className="checkmark"></span>
            <span className={classes.join(" ")}>{title}</span>
            <FontAwesomeIcon
              icon={faTrash}
              className="trush"
              onClick={removeElement}
            />
          </label>
        </li>
      )}
    </>
  );
};

export default Item;

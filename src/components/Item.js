import { useState } from 'react';

import './item.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Item = ({title, id, status}) => {
  const [checked, setCheked] = useState(status);
  const classes = ['todo__item-title'];

  if(checked){
    classes.push('done')
  }

  const updateStatus = () =>{
    setCheked(!checked)
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    storedTodos.map((el) => {
      if(el.id === id){
        el.status = !checked;
      }
      return true;
    })
    localStorage.setItem('tasks', JSON.stringify(storedTodos));
  }

  return (
    <li className="todo">
      <label className='todo__label'>
        <input type="checkbox" className='check'checked={checked} onChange={updateStatus}/>
        <span className="checkmark"></span>
        <span className={classes.join(' ')}>{title}</span>
        <FontAwesomeIcon icon={faTrash} className="trush"/>
      </label>
    </li>
  );
};

export default Item;

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

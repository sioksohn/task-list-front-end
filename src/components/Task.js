import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onUpdate, onDelete}) => {

  const handleButton = () =>{
    onUpdate(id);
  };

  const deleteButton = () =>{
    onDelete(id);
  };

  const completedClass = isComplete ? 'tasks__item__toggle--completed':'tasks__item__toggle';
  return (
    <li className="tasks__item">
      <button className={ completedClass } onClick={handleButton}>{ title }</button>
      <button className="tasks__item__remove button" onClick={deleteButton}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Task;

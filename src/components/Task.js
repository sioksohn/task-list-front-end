import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete , onUpdate }) => {

  const handleButton = () =>{
    const updatedTask = {
      id,
      title,
      isComplete: !isComplete
    };
    onUpdate(updatedTask);
  };

  const completedClass = isComplete ? 'tasks__item__toggle--completed':'tasks__item__toggle';
  return (
    <li className="tasks__item">
      <button className={ completedClass } onClick={handleButton}>{ title }</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Task;

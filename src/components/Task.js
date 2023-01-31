import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Task.css';

const Task = ({ id, title, isComplete }) => {
  const [completed, setIsComplete] = useState(isComplete);
  const setCompleted = () => {
    setIsComplete(!completed);
  };

  const completedClass = completed ? 'tasks__item__toggle--completed' : 'tasks__item__toggle';
  return (
    <li className="tasks__item">
      <button className={ completedClass } onClick={ setCompleted }>{ title }</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;

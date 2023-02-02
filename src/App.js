import React,{ useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [deleted, setDeleted] = useState(false);
  const [studentTasks, setTasks] = useState(TASKS);
  const updateTasks = id => {
    const tasks = studentTasks.map(task => {
      if (task.id === id) {
        let updatedTask = {...task};
        updatedTask.isComplete = !updatedTask.isComplete;
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(tasks);
  };

  const deleteTasks = id => {
    const tasks = studentTasks.filter(task => (task.id !== id));
    setTasks(tasks);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={studentTasks} onUpdate={updateTasks} onDelete={deleteTasks}/>
        </div>
      </main>
    </div>
  );
};

export default App;

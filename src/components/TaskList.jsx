import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li className='task-item-container' key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <p className='task-text'>{task.name}</p>
          <button className='btn_eliminar' onClick={() => deleteTask(index)}>Eliminar</button>
          <button className='btn_marcar' onClick={() => toggleTask(index)}>
            {task.completed ? 'Desmarcar' : 'Marcar'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

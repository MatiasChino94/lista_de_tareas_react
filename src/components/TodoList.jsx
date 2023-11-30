
import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import SearchInput from './SearchInput';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

function getTasksFromStorage() {
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}


const TodoList = () => {
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    const newTaskObj = {
      id: uuidv4(),
      name: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskObj]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <TaskInput addTask={addTask} />
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

export default TodoList;

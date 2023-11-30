import React, {useState} from "react";
import './TaskInput.css';


const TaskInput = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        if(newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="taskInput-container">
            <input type="text" placeholder="Escribir tarea..." value={newTask} onChange={handleInputChange} />
            <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
    )

};

export default TaskInput;


import React, { useState } from 'react';
import '../../commoncss.css';
import './TaskList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleEditMode = (taskId, initialText) => {
        setEditTaskId(taskId);
        setEditedText(initialText);
    };

    const saveEditedTask = () => {
        setTasks(tasks.map((task) => {
            if (task.id === editTaskId) {
                return { ...task, text: editedText };
            }
            return task;
        }));
        setEditTaskId(null);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="task-list">
            <h2 className="tasklist-heading">Task List</h2>
            <div className="tasklist-input">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faPlus} onClick={addTask} />
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div className="task-item-list">
                            <div className="task-items">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                />
                                {editTaskId === task.id ? (
                                    <React.Fragment>
                                        <input
                                            type="text"
                                            value={editedText}
                                            onChange={(e) => setEditedText(e.target.value)}
                                            autoFocus
                                        />
                                        <FontAwesomeIcon icon={faCheck} onClick={saveEditedTask} />
                                    </React.Fragment>
                                ) : (
                                    <span
                                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                        onDoubleClick={() => toggleEditMode(task.id, task.text)}
                                    >
                                        {task.text}
                                    </span>
                                )}
                            </div>

                            <div className="task-action">
                                {editTaskId !== task.id && (
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        onClick={() => toggleEditMode(task.id, task.text)}
                                    />
                                )}
                                <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTask(task.id)} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

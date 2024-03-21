import React from 'react'

import profilepic from '../../images/profilepic.avif'

import '../../commoncss.css'
import './Task.css'
import Button from '../../components/Button/Button'
import TaskList from '../../components/TaskList/TaskList'

const Task = () => {
  return (
    <div className="task-page page-outline">
      <div className="user-info">
        <img className="user-photo" src={profilepic} alt="profilepic"/>
        <div className="user-info-text">
          <h3 className="user-name">Anina</h3>
          <h4 className="user-email">anina@gmail.com</h4>
        </div>
        <Button text="Log Out"/>
      </div>
      <div className="task-details">
        <TaskList/>
      </div>
      
    </div>
  )
}

export default Task

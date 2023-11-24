
import React, { useState } from 'react'

import TaskForm from './TaskForm';


const CreateTaskForm = ({ handleCreateTask }) => {

    const [task, setTask] = useState({
        id: null,
        name: "",
        description: "",
        date: "",
        color: "#FFD257"
    })

    const handleInputChange = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value
        })
    }

    const handleSubmit = () => {
        handleCreateTask(task)
        setTask({ id: null, name: "", description: "", date: "", color: "#FFD257" })
    }

    return(

        <TaskForm
            handleInputChange={handleInputChange} 
            handleSubmit={handleSubmit}  
            btnTitle="Crear"
            task={task}
        />
    )
}

export default CreateTaskForm
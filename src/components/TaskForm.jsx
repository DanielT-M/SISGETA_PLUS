import React, { useState } from 'react'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TaskForm.css'
import TaskValidator from '../data/TaskValidator';

const TaskForm = ({ handleInputChange, handleSubmit, btnTitle, task }) => {

    const { name, description, date, color } = task

    const [errors, setErrors] = useState({
        name: [],
        description: [],
        date: [],
        color: []
    })

    const handleSubmitValidate = (e) => {
        e.preventDefault()

        const [isInvalidForm, errors] = TaskValidator.validate(task)

        if (isInvalidForm){
            setErrors(errors)

        } else {
            setErrors({ name: [], description: [], date: [], color: [] })
            handleSubmit()
        }
    }

    const handleChange = (e) => {
        setErrors({
            ...errors,
            [e.target.name]: []
        })

        handleInputChange(e)
    }

    return(
        <form onSubmit={handleSubmitValidate}>

            <div className="form-group has-validation">
                <label className="form-label">Nombre</label>
                <span className="counter_letters">{ name.length }/50</span>
                <input value={ name } maxLength="50" name="name" onChange={handleChange} type="text" className={`form-control ${ errors.name.length > 0 ? "is-invalid" : null }`} />
                <div className="invalid-feedback">
                    {errors.name.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Descripción</label>
                <span className="counter_letters">{ description.length }/100</span>
                <textarea value={ description } maxLength="100" name="description" onChange={handleChange} className={`form-control ${ errors.description.length > 0 ? "is-invalid" : null }`} />
                <div className="invalid-feedback">
                    {errors.description.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Color de la tarea</label>
                <input type="color" className={`form-control form-control-color ${ errors.color.length > 0 ? "is-invalid" : null }`} value={ color } name="color" onChange={handleChange} title="Choose your color"></input>
                <div className="invalid-feedback">
                    {errors.color.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">¿Cuando debes realizar la tarea?</label>
                <input type="date" className={`form-control ${ errors.date.length > 0 ? "is-invalid" : null }`} value={ date } name="date" onChange={handleChange}></input>
                <div className="invalid-feedback">
                    {errors.date.map(error => (
                        error
                    ))}
                </div>
            </div>
           
            <button type="submit" className="btn btn-primary btn_create">{ btnTitle }</button>
        </form>
    )
}

export default TaskForm
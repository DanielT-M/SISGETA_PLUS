class TaskValidator {

    static validate(task){

        let isInvalid = false

        const errors = {
            name: [],
            description: [],
            date: [],
            color: []
        }

        if (task.name.length < 7 || task.name.length > 50) {
            errors.name.push("La longitud permitida es 7 - 50 caracteres")
            isInvalid = true
        }

        if (task.description.length < 15 || task.description.length > 180) {
            errors.description.push("La longitud permitida es 15 - 180 caracteres")
            isInvalid = true
        }

        if (task.date === "") {
            errors.date.push("Se requiere una fecha")
            isInvalid = true
        }

        if (task.color === ""){
            errors.color.push("Se requiere un color valido")
            isInvalid = true
        }

        return [isInvalid, errors]
    }
}

export default TaskValidator
class UserValidator {

    static validate(user){

        let isInvalid = false
        const errors = { name: [], email: [], phone: [] }

        if (user.name.length <= 0 || user.name.length >= 80){
            errors.name.push("La longitud permitida es 1 - 80 caracteres")
            isInvalid = true
        }

        const expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!expEmail.test(user.email)){
            errors.email.push("El correo electrónico no es correcto")
            isInvalid = true
        }

        if (user.phone.length <= 0){
            errors.phone.push("El número teléfonico no es correcto")
            isInvalid = true
        }

        return [isInvalid, errors]
    }

}

export default UserValidator
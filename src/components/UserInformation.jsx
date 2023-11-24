
import React from 'react'


const UserInformation = ({ user }) => {
    return (
        <div>
            <p><b>Nombre: </b>{ user.name }</p>
            <p><b>Email: </b>{ user.email }</p>
            <p><b>Teléfono: </b>{ user.phone }</p>
        </div>
    )
}

export default UserInformation
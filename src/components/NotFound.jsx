import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - ¡Perdimos el camino!</h1>
      <Link to="/" style={{color: 'orange'}} >
        Regresar al menu principal
      </Link>
    </div>
  )
}

export default NotFound;
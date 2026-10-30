import MenuUsuario from './MenuUsuario'
import { Link } from 'react-router'

function Encabezado(){
    return(
        <header className="encabezado">
            <div className='encabezado-marca'>
            <h1>mi primer App con react</h1>
            <nav>
                <Link to="/">inicio</Link>
                <Link to="/tecnologias">tecnologias</Link>
                <a href="mailto:juandiegovalencia1721@gmail.com">contacto</a>
            </nav>
            </div>
            <MenuUsuario />
        </header>
    )
}

export default Encabezado
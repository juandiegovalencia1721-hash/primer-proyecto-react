import { Link } from 'react-router'
import { opcionesMenu } from '../data/menu.js'

function Sidebar() {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-titulo">Menú</h3>
            <nav>
                <ul className="sidebar-menu">
                    {opcionesMenu.map((opcion) => (
                        <li key={opcion.id}>
                            <Link to={opcion.url}>
                                {opcion.icono} {opcion.texto}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className="sidebar-pie">3312943 - ADSO</p>
        </aside>
    )
}

export default Sidebar
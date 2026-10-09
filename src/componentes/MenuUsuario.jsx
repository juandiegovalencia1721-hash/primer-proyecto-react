import { useState } from 'react'
import fotoPerfil from '../assets/foto-perfil.png'

function MenuUsuario() {
    const [abierto, setAbierto] = useState(false)
    const nombre = 'Fabian Urrea'
    const rol = 'Instructor ADSO'

    return (
        <div className="menu-usuario">
            <button
                type="button"
                className="menu-usuario-boton"
                aria-expanded={abierto}
                aria-haspopup="true"
                onClick={() => setAbierto(!abierto)}
            >
                <img
                    src={fotoPerfil}
                    alt={`Foto de ${nombre}`}
                    className="avatar"
                />
                <span className="menu-usuario-datos">
                    <span className="menu-usuario-nombre">{nombre}</span>
                    <span className="menu-usuario-rol">{rol}</span>
                </span>
                <span className={`flecha${abierto ? ' abierto' : ''}`} aria-hidden="true"></span>
            </button>

            {abierto && (
                <ul className="menu-desplegable">
                    <li><a href="#">Mi perfil</a></li>
                    <li><a href="#">Configuración</a></li>
                    <li className="separador" aria-hidden="true"></li>
                    <li><a href="#" className="cerrar-sesion">Cerrar sesión</a></li>
                </ul>
            )}
        </div>
    )
}

export default MenuUsuario
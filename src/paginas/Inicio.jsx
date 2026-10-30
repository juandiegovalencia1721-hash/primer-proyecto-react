import { Link } from 'react-router'

function Inicio() {
    return (
        <section>
            <h2>Bienvenido al programa de análisis y desarrollo de software</h2>
            <p>Este es el dashboard de la competencia de frontend con React.</p>
            <p>
                Empieza por conocer <Link to="/perfil">mi perfil</Link> o revisa las{' '}
                <Link to="/tecnologias">tecnologías</Link> que vamos a trabajar.
            </p>
       </section>
    )
}

export default Inicio
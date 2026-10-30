import Presentacion from '../componentes/Presentacion'

function Perfil() {
    return (
        <section>
        <h2>Mi perfil</h2>
        <Presentacion
            nombre="Juan Diego Valencia Ordóñez"
            ciudad="Popayán"
            anioNacimiento="2003"
            meta="ser ingeniero de software"
            correo="juandiegovalencia1721@gmail.com"
            telefono="321 456 7890"
        />
        </section>
    )
}

export default Perfil
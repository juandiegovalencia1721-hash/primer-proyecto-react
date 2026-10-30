function Presentacion({ nombre, ciudad, anioNacimiento, meta, correo, telefono }) {
    return(
        <div className="presentacion">
            <h2>Hola, soy {nombre}</h2>
            <p>Vivo en {ciudad} y nací en {anioNacimiento}.</p>
            <p>Mi meta es {meta}.</p>
            <p>Correo: {correo}</p>
            <p>Teléfono: {telefono}</p>
        </div>
    )
}
export default Presentacion 

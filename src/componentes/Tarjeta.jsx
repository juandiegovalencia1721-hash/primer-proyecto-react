function Tarjeta({ icono, titulo, descripcion, horas, destacada }) {
    return(
        <article className={`tarjeta${destacada ? ' destacada' : ''}`}>
            <span className="tarjeta-icono" aria-hidden="true">{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p>{horas} horas</p>
        </article>
    )
}

export default Tarjeta
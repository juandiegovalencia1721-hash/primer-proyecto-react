import reactlogo from '../assets/react.svg'

function Tarjeta (){
    return(
        <article className='tarjeta'>
            <img src={reactlogo} alt='logo de react'/>
            <h3>react</h3>
            <p>biblioteca de javaScript para construir interfaces con componentes</p>
        </article>
    )
}

export default Tarjeta
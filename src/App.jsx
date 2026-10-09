import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/piePagina'
import Presentacion from './componentes/Presentacion'



function App(){

  const programa = 'analisis y desarrollo de software'
  return(
    <>
    <div className='layout'>
    <Encabezado />
    <Sidebar /> 
    <main className='contenido'>
    <h2>bienvenidos al programa {programa}</h2>
    <Presentacion />
    <section className='tarjetas'>

    <Tarjeta />
    <Tarjeta />
    </section>
    
    </main>
    <PiePagina />
    </div>
    </>

  )
}

export default App
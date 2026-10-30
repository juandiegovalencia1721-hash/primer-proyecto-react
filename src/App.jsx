import './App.css'
import { Route, Routes } from 'react-router'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import PiePagina from './componentes/piePagina'
import Inicio from './paginas/Inicio'
import Perfil from './paginas/Perfil'
import Tecnologias from './paginas/Tecnologias'

function App() {
  return (
    <div className="layout">
      <Encabezado />
      <Sidebar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
        </Routes>
      </main>
      <PiePagina />
    </div>
  )
}

export default App


import Inicio from './components/inicioHome/home'
import Login from './components/auth/login';
import PedidosPaquete from './components/pedidospaquete/pedidos';
import Register from './components/registro/registro'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter} from "react-router-dom"
import Navbar from './navbar';
import './Apps.css'

function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Inicio/>}/>
          <Route exact path="/login" element={<Login/>}/>      
          <Route exact path="/registro" element={<Register/>}/>
          <Route excat path="/pedidos" element={<PedidosPaquete/>}/>
          </Routes>

      </BrowserRouter>
       </div>
       
  
  
  )
}

export default App;

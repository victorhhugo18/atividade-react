import './App.css';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contato from './components/pages/Contato';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaRegAddressBook, FaRegUser, FaPlug } from "react-icons/fa";

function App() {

  return (
    <div>
      <BrowserRouter>
        <ul className="menu">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/sobre"><FaRegUser /> Sobre</Link></li>
          <li><Link to="/servicos"><FaPlug /> Serviços</Link></li>
          <li><Link to="/contato"><FaRegAddressBook /> Contato</Link></li>
        </ul>
        
        {/* Aqui aparecerá o componente da rota: */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />

        </Routes>
      </BrowserRouter>

      {/* Fim do componente da rota */}

      <p className="rodape">&copy; Victor Hugo - Todos os direitos reservados</p>
    </div>
  );
}


export default App;

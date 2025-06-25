import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sillas from './pages/Sillas';
import Mesas from './pages/Mesas';
import Accesorios from './pages/Accesorios';
import Sofas from './pages/Sofas';
import Empresa from './components/Empresa';
import Contacto from './pages/Contacto';
import DondeComprar from './pages/DondeComprar';
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sillas" element={<Sillas />} />
                <Route path="/mesas" element={<Mesas />} />
                <Route path="/accesorios" element={<Accesorios />} />
                <Route path="/sofas" element={<Sofas />} />
                <Route path="/empresa" element={<Empresa />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/donde-comprar" element={<DondeComprar />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

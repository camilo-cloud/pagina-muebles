import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sillas from './pages/Sillas';
import Mesas from './pages/Mesas';
import Accesorios from './pages/Accesorios';
import Empresa from './components/Empresa';
import Hero from './components/Hero';
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
                <Route path="/empresa" element={<Empresa />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

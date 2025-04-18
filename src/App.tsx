import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contactanos from './pages/Contactanos';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import SobreMagnavoz from './pages/SobreMagnavoz';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col relative animated-gradient">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <Header />
          <div className="mt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-magnavoz" element={<SobreMagnavoz />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contactanos" element={<Contactanos />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
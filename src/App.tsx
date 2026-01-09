import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from './components';
import { Home, Atrativos, Visite, FeCultura, Bandeira, Eventos, CirculoPiaga, Apoie, MontePiaga } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atrativos" element={<Atrativos />} />
          <Route path="/visite" element={<Visite />} />
          <Route path="/fe-cultura" element={<FeCultura />} />
          <Route path="/bandeira" element={<Bandeira />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/circulo-piaga" element={<CirculoPiaga />} />
          <Route path="/apoie" element={<Apoie />} />
          <Route path="/monte-piaga" element={<MontePiaga />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

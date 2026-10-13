import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* 1. Navbar global arriba */}
      <Navbar />

      {/* 2. Página Home con todo el diseño maquetado */}
      <Home />
    </div>
  );
}

export default App;
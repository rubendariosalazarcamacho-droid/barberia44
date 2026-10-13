import React, { useState } from 'react';

// COMPONENTE NAVBAR PÚBLICO
export const Navbar = () => {
  // Estado para abrir/cerrar el menú en móviles
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        
        {/* LOGO BARBERÍA */}
        <div className="flex items-center gap-2 font-extrabold text-lg text-cyan-400">
          <span>✂️</span>
          <span>BARBERÍA</span>
        </div>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* MENÚ DESPLEGABLE CON LAS 4 OPCIONES ÚNICAS */}
      {isOpen && (
        <div className="bg-slate-950 border-t border-slate-800 px-5 py-4 space-y-3">
          
          {/* 1. HOME / INICIO */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Home / Inicio
          </button>

          {/* 2. RESERVAR CITA (Redirigirá a Login si no hay sesión activa) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition"
          >
            Reservar Cita / Book Now
          </button>

          {/* 3. INICIAR SESIÓN */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 text-sm text-slate-200 border border-slate-700 bg-slate-900 font-medium rounded-xl hover:bg-slate-800 transition"
          >
            Iniciar Sesión / Log In
          </button>

          {/* 4. REGISTRARSE */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 text-sm text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 font-semibold rounded-xl hover:bg-cyan-500/20 transition"
          >
            Registrarse / Sign Up
          </button>

        </div>
      )}
    </nav>
  );
};
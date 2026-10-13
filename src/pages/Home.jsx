import React from 'react';

export const Home = () => {
  return (
    // CONTENEDOR PADRE: Define el fondo oscuro global y el color de texto base
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* ==========================================
          1. SECCIÓN HERO (BANNER PRINCIPAL)
          ========================================== */}
      <section className="relative px-6 py-20 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Etiqueta flotante superior */}
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 uppercase tracking-wider">
          Barbería Profesional / Professional Barbershop
        </span>

        {/* Título Principal Bilingüe */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Estilo clásico, <span className="text-cyan-400">corte moderno.</span>
        </h1>
        <p className="text-lg text-slate-400 mt-2 font-light">
          Classic style, modern cut.
        </p>

        {/* Descripción breve */}
        <p className="text-slate-300 mt-6 max-w-2xl text-base sm:text-lg">
          Transformamos tu imagen con técnicas de precisión y un servicio de primera clase. Reserva tu turno en segundos.
        </p>

        {/* Botón Call To Action (Llamada a la acción) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 text-lg">
            Agendar Cita / Book Now
          </button>
        </div>
      </section>


      {/* ==========================================
          2. SECCIÓN DE BENEFICIOS / POR QUÉ ELEGIRNOS
          ========================================== */}
      <section className="px-6 py-12 border-y border-slate-800/80 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Tarjeta 1: Atención Bilingüe */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-3xl mb-3">🗣️</div>
            <h3 className="text-lg font-bold text-white">Atención Bilingüe</h3>
            <p className="text-sm text-slate-400 mt-1">Bilingual Staff</p>
            <p className="text-xs text-slate-400 mt-3">Atendemos a locales y visitantes extranjeros sin barreras de idioma.</p>
          </div>

          {/* Tarjeta 2: Puntualidad */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="text-lg font-bold text-white">Sin Esperas</h3>
            <p className="text-sm text-slate-400 mt-1">No Waiting Time</p>
            <p className="text-xs text-slate-400 mt-3">Reserva tu hora exacta y sé atendido de inmediato por tu barbero.</p>
          </div>

          {/* Tarjeta 3: Bebida Incluida */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-3xl mb-3">☕</div>
            <h3 className="text-lg font-bold text-white">Bebida de Cortesía</h3>
            <p className="text-sm text-slate-400 mt-1">Complimentary Drink</p>
            <p className="text-xs text-slate-400 mt-3">Disfruta de un café, cerveza o bebida mientras trabajamos en tu estilo.</p>
          </div>

        </div>
      </section>


      {/* ==========================================
          3. SECCIÓN DE CATÁLOGO DE SERVICIOS Y PRECIOS
          ========================================== */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Nuestros Servicios</h2>
          <p className="text-slate-400 mt-1">Our Services & Pricing</p>
        </div>

        {/* Grilla de Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Servicio 1 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Corte Ejecutivo</h3>
                <span className="text-cyan-400 font-bold text-lg">$35.000</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Executive Haircut</p>
              <p className="text-sm text-slate-300 mt-3">Asesoría de imagen, corte con tijera/máquina, lavado y peinado con cera premium.</p>
            </div>
            <span className="text-xs text-slate-500 mt-6 block">Duración: 45 min</span>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Arreglo de Barba</h3>
                <span className="text-cyan-400 font-bold text-lg">$25.000</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Beard Trim & Spa</p>
              <p className="text-sm text-slate-300 mt-3">Diseño de barba, perfilado a navaja, toalla caliente y aceites hidratantes.</p>
            </div>
            <span className="text-xs text-slate-500 mt-6 block">Duración: 30 min</span>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-cyan-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-bl-lg uppercase">Popular</span>
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Combo Imperial</h3>
                <span className="text-cyan-400 font-bold text-lg">$55.000</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Full Hair & Beard Combo</p>
              <p className="text-sm text-slate-300 mt-3">Servicio completo de corte + arreglo de barba completo + tratamiento facial exprés.</p>
            </div>
            <span className="text-xs text-slate-500 mt-6 block">Duración: 75 min</span>
          </div>

        </div>
      </section>


      {/* ==========================================
          4. SECCIÓN DESTACADA DE MEMBRESÍAS (VIP)
          ========================================== */}
      <section className="px-6 py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Club Privado</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Membresías Mensuales / Memberships</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto text-sm">
              Paga por adelantado, ahorra dinero en cada visita y accede a beneficios exclusivos todo el mes.
            </p>
          </div>

          {/* Contenedor de Planes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Plan 1 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Plan Silver</h3>
                <p className="text-3xl font-extrabold text-white mt-4">$90.000 <span className="text-xs text-slate-400 font-normal">/ mes</span></p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ 2 Cortes de cabello al mes</li>
                  <li className="flex items-center gap-2">✓ 10% Descuento en productos</li>
                  <li className="flex items-center gap-2">✓ Reserva prioritaria</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition">
                Adquirir Plan
              </button>
            </div>

            {/* Plan 2: Destacado Gold */}
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-cyan-500 relative flex flex-col justify-between shadow-xl shadow-cyan-500/10">
              <span className="absolute -top-3 right-8 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</span>
              <div>
                <h3 className="text-xl font-bold text-white">Plan Gold VIP</h3>
                <p className="text-3xl font-extrabold text-cyan-400 mt-4">$150.000 <span className="text-xs text-slate-400 font-normal">/ mes</span></p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ Cortes e higienes ilimitadas</li>
                  <li className="flex items-center gap-2">✓ Barba ilimitada</li>
                  <li className="flex items-center gap-2">✓ 20% Descuento en productos</li>
                  <li className="flex items-center gap-2">✓ Bebidas premium incluidas</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition">
                Ser Miembro VIP
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          5. SECCIÓN DE NUESTRO EQUIPO (BARBEROS)
          ========================================== */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Nuestros Barberos</h2>
          <p className="text-slate-400 mt-1">Meet Our Team</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Barbero 1 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden text-center p-6">
            <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">💈</div>
            <h3 className="text-lg font-bold text-white">Carlos "Master"</h3>
            <p className="text-xs text-cyan-400 font-medium mt-0.5">Especialista en Fade & Barbería Clásica</p>
            <p className="text-xs text-slate-400 mt-3">8 años de experiencia. Habla Español e Inglés.</p>
          </div>

          {/* Barbero 2 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden text-center p-6">
            <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">✂️</div>
            <h3 className="text-lg font-bold text-white">Mateo Silva</h3>
            <p className="text-xs text-cyan-400 font-medium mt-0.5">Especialista en Barbas & Spa</p>
            <p className="text-xs text-slate-400 mt-3">Experto en perfilados y tratamientos de hidratación.</p>
          </div>

          {/* Barbero 3 */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden text-center p-6">
            <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">💈</div>
            <h3 className="text-lg font-bold text-white">David Ruiz</h3>
            <p className="text-xs text-cyan-400 font-medium mt-0.5">Diseños Urbanos & Freestyle</p>
            <p className="text-xs text-slate-400 mt-3">Especializado en tendencias modernas y cortes urbanos.</p>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. SECCIÓN DE RESEÑAS Y CALIFICACIONES
          ========================================== */}
      <section className="px-6 py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          {/* ENCABEZADO Y RESUMEN DE PUNTUACIÓN */}
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Experiencias Reales</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Lo que dicen nuestros clientes</h2>
            <p className="text-slate-400 mt-1 text-sm">Customer Reviews & Ratings</p>
            
            {/* Promedio General */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex text-amber-400 text-lg">⭐⭐⭐⭐⭐</div>
              <span className="text-white font-bold text-lg">4.9</span>
              <span className="text-slate-500 text-sm">(+120 opiniones)</span>
            </div>
          </div>

          {/* GRILLA DE RESEÑAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Reseña 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-sm">⭐⭐⭐⭐⭐</div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-bold border border-amber-500/20">Miembro VIP</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "El servicio con Carlos es impecable. Es de las pocas barberías donde respetan la hora exacta de la cita y la atención bilingüe me facilitó todo."
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Michael R.</h4>
                  <p className="text-[10px] text-slate-500">Atendido por: Carlos "Master"</p>
                </div>
                <span className="text-[10px] text-slate-500">Hace 2 días</span>
              </div>
            </div>

            {/* Reseña 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-sm">⭐⭐⭐⭐⭐</div>
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full font-bold border border-cyan-500/20">Cliente Verificado</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "El ritual de barba con toalla caliente es de otro nivel. Mateo cuida cada detalle y el ambiente del lugar con bebida incluida es increíble."
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Andrés G.</h4>
                  <p className="text-[10px] text-slate-500">Atendido por: Mateo Silva</p>
                </div>
                <span className="text-[10px] text-slate-500">Hace 1 semana</span>
              </div>
            </div>

            {/* Reseña 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-sm">⭐⭐⭐⭐⭐</div>
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full font-bold border border-cyan-500/20">Cliente Verificado</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "David entendió a la perfección el estilo de degrado que quería. Además, la facilidad de reservar desde la app sin hacer filas es top."
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Daniel M.</h4>
                  <p className="text-[10px] text-slate-500">Atendido por: David Ruiz</p>
                </div>
                <span className="text-[10px] text-slate-500">Hace 2 semanas</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          6. SECCIÓN UBICACIÓN Y HORARIOS
          ========================================== */}
      <section className="px-6 py-12 bg-slate-900/60 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">📍 Ubicación / Location</h3>
            <p className="text-sm text-slate-300">Calle Principal # 10 - 20</p>
            <p className="text-xs text-slate-400 mt-1">Zona Centro / Turística</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">🕒 Horarios / Hours</h3>
            <p className="text-sm text-slate-300">Lunes a Sábado: 9:00 AM - 8:00 PM</p>
            <p className="text-sm text-slate-300">Domingos: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </section>


      {/* ==========================================
          7. FOOTER (PIE DE PÁGINA)
          ========================================== */}
      <footer className="py-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 Barbería App. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};
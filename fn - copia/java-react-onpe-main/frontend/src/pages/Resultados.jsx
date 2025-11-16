import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Resultados() {
  // Función para importar imágenes dinámicamente
  const getImageUrl = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  const getLogoUrl = (logoName) => {
    try {
      return new URL(`../assets/logos/${logoName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  const [resultados, setResultados] = useState({
    'Fuerza Popular': { 
      votos: 2450000, 
      color: '#FF6B35', 
      candidato: 'Keiko Fujimori', 
      imagenName: 'keiko_fujimori.jpg',
      logoName: 'fuerza_popular.png'
    },
    'Perú Libre': { 
      votos: 2380000, 
      color: '#DC143C', 
      candidato: 'Rafael López Aliaga', 
      imagenName: 'rafael_lopez_aliaga.jpg',
      logoName: 'renovacion_popular.png'
    },
    'Renovación Popular': { 
      votos: 2120000, 
      color: '#4169E1', 
      candidato: 'César Acuña', 
      imagenName: 'cesar_acuna.jpg',
      logoName: 'app.png'
    },
    'Alianza para el Progreso': { 
      votos: 1980000, 
      color: '#00CED1', 
      candidato: 'Phillip Butters', 
      imagenName: 'phillip_butters.jpg',
      logoName: 'avanza_pais.png'
    },
    'Avanza País': { 
      votos: 1750000, 
      color: '#32CD32', 
      candidato: 'Carlos Álvarez', 
      imagenName: 'carlos_alvarez.jpg',
      logoName: 'primero_la_gente.png'
    }
  });

  const [historico, setHistorico] = useState([
    { tiempo: '20:00', 'Fuerza Popular': 2400000, 'Perú Libre': 2350000, 'Renovación Popular': 2100000, 'Alianza para el Progreso': 1950000, 'Avanza País': 1720000 }
  ]);

  const departamentos = [
    { id: 'lima', nombre: 'Lima', ganador: 'Fuerza Popular', x: 280, y: 380 },
    { id: 'arequipa', nombre: 'Arequipa', ganador: 'Renovación Popular', x: 250, y: 480 },
    { id: 'cusco', nombre: 'Cusco', ganador: 'Perú Libre', x: 320, y: 440 },
    { id: 'piura', nombre: 'Piura', ganador: 'Alianza para el Progreso', x: 180, y: 200 },
    { id: 'la-libertad', nombre: 'La Libertad', ganador: 'Alianza para el Progreso', x: 240, y: 280 },
    { id: 'cajamarca', nombre: 'Cajamarca', ganador: 'Perú Libre', x: 240, y: 240 },
    { id: 'puno', nombre: 'Puno', ganador: 'Perú Libre', x: 320, y: 480 },
    { id: 'junin', nombre: 'Junín', ganador: 'Fuerza Popular', x: 300, y: 380 },
    { id: 'loreto', nombre: 'Loreto', ganador: 'Avanza País', x: 300, y: 180 },
    { id: 'ancash', nombre: 'Áncash', ganador: 'Fuerza Popular', x: 260, y: 300 },
    { id: 'huanuco', nombre: 'Huánuco', ganador: 'Renovación Popular', x: 280, y: 320 },
    { id: 'san-martin', nombre: 'San Martín', ganador: 'Avanza País', x: 300, y: 240 },
    { id: 'ica', nombre: 'Ica', ganador: 'Fuerza Popular', x: 260, y: 440 },
    { id: 'ayacucho', nombre: 'Ayacucho', ganador: 'Perú Libre', x: 300, y: 420 },
    { id: 'lambayeque', nombre: 'Lambayeque', ganador: 'Alianza para el Progreso', x: 200, y: 240 },
    { id: 'ucayali', nombre: 'Ucayali', ganador: 'Avanza País', x: 320, y: 300 },
    { id: 'amazonas', nombre: 'Amazonas', ganador: 'Perú Libre', x: 260, y: 200 },
    { id: 'tacna', nombre: 'Tacna', ganador: 'Renovación Popular', x: 240, y: 520 },
    { id: 'moquegua', nombre: 'Moquegua', ganador: 'Renovación Popular', x: 250, y: 500 },
    { id: 'pasco', nombre: 'Pasco', ganador: 'Fuerza Popular', x: 280, y: 340 },
    { id: 'tumbes', nombre: 'Tumbes', ganador: 'Alianza para el Progreso', x: 150, y: 180 },
    { id: 'apurimac', nombre: 'Apurímac', ganador: 'Perú Libre', x: 300, y: 440 },
    { id: 'huancavelica', nombre: 'Huancavelica', ganador: 'Perú Libre', x: 290, y: 400 },
    { id: 'madre-de-dios', nombre: 'Madre de Dios', ganador: 'Avanza País', x: 360, y: 420 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setResultados(prev => {
        const nuevo = { ...prev };
        Object.keys(nuevo).forEach(partido => {
          const cambio = Math.floor(Math.random() * 50000) - 20000;
          nuevo[partido] = {
            ...nuevo[partido],
            votos: Math.max(0, nuevo[partido].votos + cambio)
          };
        });
        return nuevo;
      });

      setHistorico(prev => {
        const ahora = new Date();
        const tiempo = `${ahora.getHours()}:${ahora.getMinutes().toString().padStart(2, '0')}`;
        const nuevosDatos = { tiempo };
        Object.keys(resultados).forEach(partido => {
          nuevosDatos[partido] = resultados[partido].votos;
        });
        return [...prev.slice(-9), nuevosDatos];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [resultados]);

  const partidosOrdenados = Object.entries(resultados)
    .sort((a, b) => b[1].votos - a[1].votos);

  const lider = partidosOrdenados[0];
  const totalVotos = Object.values(resultados).reduce((sum, p) => sum + p.votos, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-900 mb-2">Resultados Electorales 2026</h1>
          <p className="text-gray-600 text-lg">Actualización en tiempo real • {totalVotos.toLocaleString()} votos contabilizados</p>
        </div>

        {/* Card del Líder */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl p-8 mb-8 border-4 border-yellow-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                  <img 
                    src={getImageUrl(lider[1].imagenName)} 
                    alt={lider[1].candidato}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400" style={{display: 'none'}}>
                    {lider[1].candidato.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <span className="text-3xl">👑</span>
                </div>
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-1 uppercase tracking-wider">Liderando las Elecciones</div>
                <h2 className="text-4xl font-bold text-white mb-2">{lider[1].candidato}</h2>
                <div className="text-white text-lg font-semibold">{lider[0]}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-white mb-2">{((lider[1].votos / totalVotos) * 100).toFixed(1)}%</div>
              <div className="text-white text-xl font-semibold">{lider[1].votos.toLocaleString()} votos</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mapa del Perú */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Mapa Electoral por Departamentos</h3>
            <div className="relative bg-gray-50 rounded-lg p-4">
              <svg viewBox="0 0 600 800" className="w-full h-auto" style={{ maxHeight: '600px' }}>
                {/* Mapa detallado del Perú basado en la imagen real */}
                
                {/* Tumbes - Esquina superior izquierda */}
                <path d="M 120,20 L 140,18 L 155,25 L 160,45 L 150,55 L 130,50 L 115,35 Z" 
                  fill={resultados['Alianza para el Progreso'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all hover:stroke-2"/>
                <text x="137" y="40" className="text-[10px] font-semibold fill-white pointer-events-none">Tumbes</text>

                {/* Piura - Costa norte, región grande */}
                <path d="M 115,55 L 150,55 L 175,70 L 185,100 L 190,130 L 175,150 L 155,155 L 130,145 L 115,120 L 105,90 Z" 
                  fill={resultados['Alianza para el Progreso'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="145" y="110" className="text-[11px] font-semibold fill-white pointer-events-none">Piura</text>

                {/* Lambayeque - Costa, debajo de Piura */}
                <path d="M 155,155 L 175,150 L 195,165 L 200,185 L 185,195 L 165,190 L 150,175 Z" 
                  fill={resultados['Alianza para el Progreso'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="170" y="177" className="text-[9px] font-semibold fill-white pointer-events-none">Lambayeque</text>

                {/* Cajamarca - Interior norte */}
                <path d="M 175,150 L 210,140 L 235,155 L 240,180 L 225,200 L 200,195 L 185,180 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="210" y="175" className="text-[10px] font-semibold fill-white pointer-events-none">Cajamarca</text>

                {/* Amazonas - Noreste */}
                <path d="M 235,155 L 275,145 L 295,160 L 290,185 L 270,195 L 245,190 L 240,170 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="265" y="173" className="text-[9px] font-semibold fill-white pointer-events-none">Amazonas</text>

                {/* Loreto - Grande, parte superior derecha */}
                <path d="M 275,60 L 380,50 L 420,80 L 440,120 L 435,165 L 410,195 L 375,205 L 340,200 L 310,185 L 290,160 L 285,120 Z" 
                  fill={resultados['Avanza País'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="355" y="140" className="text-[12px] font-semibold fill-white pointer-events-none">Loreto</text>

                {/* San Martín */}
                <path d="M 290,185 L 320,180 L 345,200 L 340,230 L 315,240 L 290,230 L 280,210 Z" 
                  fill={resultados['Avanza País'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="310" y="213" className="text-[9px] font-semibold fill-white pointer-events-none">San Martín</text>

                {/* La Libertad - Costa norte-centro */}
                <path d="M 165,190 L 200,195 L 220,210 L 225,240 L 210,260 L 185,265 L 160,250 L 150,220 Z" 
                  fill={resultados['Alianza para el Progreso'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="185" y="230" className="text-[9px] font-semibold fill-white pointer-events-none">La Libertad</text>

                {/* Áncash - Costa centro */}
                <path d="M 160,250 L 185,265 L 195,290 L 190,320 L 165,330 L 140,315 L 135,285 Z" 
                  fill={resultados['Fuerza Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="165" y="300" className="text-[10px] font-semibold fill-white pointer-events-none">Áncash</text>

                {/* Huánuco - Centro */}
                <path d="M 210,260 L 245,255 L 270,275 L 265,305 L 240,320 L 215,315 L 200,290 Z" 
                  fill={resultados['Renovación Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="235" y="290" className="text-[9px] font-semibold fill-white pointer-events-none">Huánuco</text>

                {/* Ucayali - Este, grande */}
                <path d="M 340,230 L 410,220 L 445,245 L 455,290 L 445,335 L 415,360 L 375,365 L 340,350 L 315,320 L 310,280 Z" 
                  fill={resultados['Avanza País'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="380" y="300" className="text-[11px] font-semibold fill-white pointer-events-none">Ucayali</text>

                {/* Pasco - Centro-interior */}
                <path d="M 215,315 L 245,310 L 260,330 L 255,355 L 230,365 L 210,350 Z" 
                  fill={resultados['Fuerza Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="233" y="340" className="text-[9px] font-semibold fill-white pointer-events-none">Pasco</text>

                {/* Junín - Centro */}
                <path d="M 210,350 L 240,345 L 265,365 L 260,395 L 235,410 L 210,405 L 195,380 Z" 
                  fill={resultados['Fuerza Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="230" y="380" className="text-[10px] font-semibold fill-white pointer-events-none">Junín</text>

                {/* Lima - Costa centro, capital */}
                <path d="M 140,315 L 170,325 L 195,345 L 200,380 L 185,410 L 160,420 L 135,410 L 120,380 L 115,345 Z" 
                  fill={resultados['Fuerza Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="157" y="375" className="text-[11px] font-semibold fill-white pointer-events-none">Lima</text>

                {/* Huancavelica */}
                <path d="M 195,405 L 220,400 L 240,420 L 235,445 L 215,455 L 195,445 L 185,425 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="212" y="430" className="text-[8px] font-semibold fill-white pointer-events-none">Huancavelica</text>

                {/* Ica - Costa sur */}
                <path d="M 135,410 L 165,420 L 175,445 L 170,475 L 145,485 L 120,475 L 115,445 Z" 
                  fill={resultados['Fuerza Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="145" y="453" className="text-[10px] font-semibold fill-white pointer-events-none">Ica</text>

                {/* Ayacucho */}
                <path d="M 195,445 L 235,440 L 265,460 L 260,495 L 235,510 L 210,505 L 190,480 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="227" y="478" className="text-[10px] font-semibold fill-white pointer-events-none">Ayacucho</text>

                {/* Apurímac */}
                <path d="M 210,505 L 245,500 L 270,520 L 265,550 L 240,560 L 215,550 L 205,525 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="237" y="533" className="text-[9px] font-semibold fill-white pointer-events-none">Apurímac</text>

                {/* Cusco - Grande, sureste */}
                <path d="M 265,495 L 320,485 L 370,510 L 385,555 L 370,595 L 335,610 L 290,605 L 260,580 L 250,540 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="310" y="555" className="text-[11px] font-semibold fill-white pointer-events-none">Cusco</text>

                {/* Madre de Dios - Extremo sureste */}
                <path d="M 370,595 L 420,585 L 460,610 L 465,650 L 440,680 L 400,685 L 365,665 L 355,630 Z" 
                  fill={resultados['Avanza País'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="405" y="640" className="text-[9px] font-semibold fill-white pointer-events-none">Madre de Dios</text>

                {/* Puno - Grande, sureste interior */}
                <path d="M 260,580 L 295,575 L 335,595 L 350,635 L 340,675 L 305,695 L 265,690 L 240,665 L 230,625 Z" 
                  fill={resultados['Perú Libre'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="290" y="645" className="text-[11px] font-semibold fill-white pointer-events-none">Puno</text>

                {/* Arequipa - Costa sur */}
                <path d="M 145,485 L 180,490 L 215,515 L 230,550 L 235,590 L 210,615 L 175,620 L 145,605 L 125,570 L 120,530 Z" 
                  fill={resultados['Renovación Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="175" y="560" className="text-[10px] font-semibold fill-white pointer-events-none">Arequipa</text>

                {/* Moquegua - Costa sur */}
                <path d="M 145,605 L 175,620 L 190,645 L 185,670 L 160,680 L 135,670 L 125,645 Z" 
                  fill={resultados['Renovación Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="155" y="650" className="text-[9px] font-semibold fill-white pointer-events-none">Moquegua</text>

                {/* Tacna - Extremo sur */}
                <path d="M 135,670 L 165,680 L 180,700 L 175,725 L 150,735 L 125,725 L 115,700 Z" 
                  fill={resultados['Renovación Popular'].color} opacity="0.85" stroke="#666" strokeWidth="1.5" className="hover:opacity-100 cursor-pointer transition-all"/>
                <text x="147" y="708" className="text-[10px] font-semibold fill-white pointer-events-none">Tacna</text>
              </svg>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {Object.entries(resultados).map(([partido, data]) => (
                <div key={partido} className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: data.color }}></div>
                  <span className="text-sm font-medium text-gray-700">{partido}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabla de Resultados */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Resultados por Partido</h3>
            <div className="space-y-4">
              {partidosOrdenados.map(([partido, data], index) => (
                <div key={partido} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl font-bold text-gray-400">#{index + 1}</div>
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        <img 
                          src={getLogoUrl(data.logoName)} 
                          alt={partido}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full flex items-center justify-center text-white font-bold" 
                             style={{ backgroundColor: data.color, display: 'none' }}>
                          {partido.substring(0, 2)}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{partido}</div>
                        <div className="text-sm text-gray-600">{data.candidato}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{((data.votos / totalVotos) * 100).toFixed(1)}%</div>
                      <div className="text-sm text-gray-600">{data.votos.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${(data.votos / totalVotos) * 100}%`,
                        backgroundColor: data.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gráfico de Líneas */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Tendencia en Tiempo Real</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={historico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tiempo" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Legend />
              {Object.entries(resultados).map(([partido, data]) => (
                <Line
                  key={partido}
                  type="monotone"
                  dataKey={partido}
                  stroke={data.color}
                  strokeWidth={3}
                  dot={{ fill: data.color, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
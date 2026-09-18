import { Link } from 'react-router';

const reflexiones = [
  {
    name: 'Brayan Córdoba',
    initial: 'B',
    color: 'from-purple-600 to-fuchsia-600',
    quote:
      '"Lo que más me quedó de la materia fue entender que muchas veces un problema se puede evitar simplemente explicando bien las cosas desde el principio. También me gustó ver que la comunicación tiene diferentes formas y que no siempre tenemos que decir las cosas de la misma manera."',
    aprendizaje: [
      'La escucha activa es tan importante como hablar',
      'Existen múltiples formas de comunicar una misma idea',
      'La claridad evita conflictos antes de que ocurran',
    ],
  },
  {
    name: 'Valentina Molina',
    initial: 'V',
    color: 'from-fuchsia-600 to-pink-500',
    quote:
      '"Durante este trimestre aprendí que comunicarse bien es más importante de lo que parece. Aunque los temas fueron fáciles de entender, me ayudó a darme cuenta de que la forma en que expresamos una idea puede hacer que los demás la entiendan mejor. También aprendí que escuchar y tener en cuenta las opiniones de los demás facilita mucho el trabajo en equipo."',
    aprendizaje: [
      'La forma de expresar una idea cambia cómo se recibe',
      'Escuchar activamente mejora el trabajo colaborativo',
      'La comunicación es una habilidad que se practica',
    ],
  },
  {
    name: 'Camilo Vargas',
    initial: 'C',
    color: 'from-violet-600 to-purple-500',
    quote:
      '"Estos trabajos me permitieron comprender que la comunicación va más allá de las palabras. Aprendí la importancia de mantener una buena comunicación, expresar mis ideas de forma asertiva y reconocer cómo los gestos, posturas y distancias también transmiten mensajes. Estos conocimientos serán útiles tanto en mi formación como en mi vida laboral."',
    aprendizaje: [
      'La comunicación va más allá de las palabras',
      'Expresar ideas de forma asertiva mejora los mensajes',
      'Los gestos, posturas y distancias también comunican',
      'Estos conocimientos son útiles en la formación y la vida laboral',
    ],
  },
];

export default function Reflexiones() {
  return (
    <div className="min-h-screen bg-[#07070f] pt-14">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <div
              className="inline-flex px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              7. Reflexiones
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Reflexiones individuales
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              En esta sección compartimos lo que aprendimos durante el trimestre y lo que nos dejó
              la experiencia de trabajar con el tema de la comunicación.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Reflection cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reflexiones.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-[#0f0f1a] border border-white/5 overflow-hidden card-hover"
            >
              <div className={`h-16 bg-gradient-to-br ${r.color} flex items-center px-6`}>
                <div className="w-10 h-10 rounded-full bg-black/30 border-2 border-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {r.initial}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {r.name}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/60 text-sm leading-relaxed italic mb-6">{r.quote}</p>
                <div>
                  <div
                    className="text-[10px] font-mono text-purple-400/60 mb-3 tracking-wider"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    APRENDIZAJES CLAVE
                  </div>
                  <ul className="flex flex-col gap-2">
                    {r.aprendizaje.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-white/45">
                        <span className="text-purple-400 mt-0.5">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing thought */}
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/20" />
          <div className="absolute inset-0 bg-[#0f0f1a]/70" />
          <div className="relative p-10 text-center">
            <div
              className="text-xs font-mono text-purple-400/60 mb-4 tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              CONCLUSIÓN DEL TRIMESTRE
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              La comunicación también es{' '}
              <span className="gradient-text">código</span>
            </h2>
            <p className="text-white/45 text-sm max-w-2xl mx-auto leading-relaxed">
              Aprendimos que comunicarse bien no es solo hablar o escribir, sino entender, escuchar
              y adaptarse al contexto. En el desarrollo de software, estas habilidades nos permiten
              construir mejores productos, mejores equipos y mejores relaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6 mt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span
            className="font-mono text-xs text-white/20"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            &lt;/&gt; ComuniCode
          </span>
          <span className="text-xs text-white/20 italic">Comunicar para desarrollar.</span>
        </div>
      </footer>
    </div>
  );
}

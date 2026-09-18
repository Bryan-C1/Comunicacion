import { Link } from 'react-router';

const cards = [
  {
    to: '/comunicacion',
    number: '01',
    tag: 'FUNDAMENTOS',
    title: 'Comunicación',
    desc: 'Conoce qué es la comunicación, sus elementos, su importancia y cómo influye en nuestra vida personal, académica y profesional.',
    cta: 'Explorar →',
  },
  {
    to: '/temas',
    number: '02',
    tag: 'FORMACIÓN',
    title: 'Temas vistos',
    desc: 'Revisa los principales temas trabajados durante el trimestre: tipos de comunicación, funciones del lenguaje, comunicación verbal y no verbal.',
    cta: 'Ver temas →',
  },
  {
    to: '/reto',
    number: '03',
    tag: 'REFLEXIÓN',
    title: 'Nuestro reto',
    desc: 'Conoce las situaciones de comunicación que identificamos y las estrategias que utilizamos para mejorar nuestra forma de relacionarnos.',
    cta: 'Ver reto →',
  },
  {
    to: '/equipo',
    number: '04',
    tag: 'PERSONAS',
    title: 'Nuestro equipo',
    desc: 'Conoce a los integrantes del equipo, sus intereses, conocimientos y algunas de las características que los representan.',
    cta: 'Conocer equipo →',
  },
  {
    to: '/evidencias',
    number: '05',
    tag: 'TRABAJOS',
    title: 'Evidencias',
    desc: 'Explora las actividades, trabajos y experiencias que hacen parte de nuestro proceso de aprendizaje durante el trimestre.',
    cta: 'Ver evidencias →',
  },
  {
    to: '/reflexiones',
    number: '06',
    tag: 'APRENDIZAJE',
    title: 'Reflexiones',
    desc: 'Compartimos lo que aprendimos durante el trimestre y lo que nos dejó la experiencia de trabajar el tema de la comunicación.',
    cta: 'Leer reflexiones →',
  },
];

export default function Inicio() {
  return (
    <div className="min-h-screen bg-[#07070f] pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-700/15 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-fuchsia-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs tracking-widest text-purple-300 mb-8"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            COMUNICACIÓN · TECNOLOGÍA · TRABAJO EN EQUIPO
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Comunicar
            <br />
            <span className="gradient-text">para desarrollar</span>
          </h1>

          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            En ComuniCode exploramos cómo una comunicación clara, respetuosa y efectiva nos
            permite trabajar mejor en equipo, compartir ideas y desarrollar soluciones tecnológicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/comunicacion"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Descubre el proyecto →
            </Link>
            <Link
              to="/temas"
              className="px-8 py-3 rounded-full border border-white/15 text-white/70 text-sm hover:border-white/30 hover:text-white transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ver temas
            </Link>
          </div>
        </div>
      </section>

      {/* Section intro */}
      <section className="px-6 pb-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Comunicación que conecta ideas
          </h2>
          <p className="text-white/45 max-w-2xl text-sm leading-relaxed">
            La comunicación está presente en cada proyecto, cada equipo y cada desafío. En el
            desarrollo de software, saber escuchar, expresar nuestras ideas y comprender a los
            demás es fundamental para alcanzar mejores resultados.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group gradient-border rounded-2xl p-6 card-hover bg-[#0f0f1a] flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs text-white/25 font-mono"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {card.number} / 06
                </span>
                <span
                  className="text-[10px] tracking-widest text-purple-400/70 font-mono"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {card.tag}
                </span>
              </div>

              <div className="h-px bg-gradient-to-r from-fuchsia-500/40 via-purple-500/40 to-transparent" />

              <h3
                className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {card.title}
              </h3>

              <p className="text-white/45 text-sm leading-relaxed flex-1">{card.desc}</p>

              <span className="text-sm text-purple-400 group-hover:text-fuchsia-400 transition-colors">
                {card.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6">
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

import { Link } from 'react-router';

const reasons = [
  {
    icon: '💡',
    title: 'Evita malentendidos',
    desc: 'Ayuda a expresar las ideas con claridad y evitar confusiones.',
  },
  {
    icon: '🤝',
    title: 'Mejora el trabajo en equipo',
    desc: 'Facilita la colaboración, la confianza y el intercambio de ideas.',
  },
  {
    icon: '⚡',
    title: 'Ayuda a tomar decisiones',
    desc: 'Permite compartir información y encontrar soluciones en conjunto.',
  },
  {
    icon: '🔗',
    title: 'Fortalece las relaciones',
    desc: 'Favorece el respeto, la confianza y una mejor convivencia.',
  },
];

const benefits = [
  {
    title: 'Claridad en los requisitos',
    desc: 'La comunicación asertiva asegura que los requisitos del software sean entendidos correctamente por todo el equipo, evitando errores y retrabajos.',
  },
  {
    title: 'Colaboración efectiva',
    desc: 'Permite a los tecnólogos expresar sus ideas y opiniones de manera respetuosa, fomentando un ambiente donde todos aportan soluciones.',
  },
  {
    title: 'Resolución de conflictos',
    desc: 'Facilita la gestión de conflictos que puedan surgir durante el desarrollo, promoviendo soluciones mutuamente satisfactorias.',
  },
  {
    title: 'Feedback constructivo',
    desc: 'Permite dar y recibir retroalimentación de manera efectiva, lo que es crucial para el aprendizaje continuo y la mejora del producto.',
  },
  {
    title: 'Relación con clientes',
    desc: 'La comunicación asertiva con los clientes ayuda a gestionar sus expectativas, comprender sus necesidades y asegurar la satisfacción con el producto final.',
  },
  {
    title: 'Negociación de plazos',
    desc: 'Facilita la negociación con clientes y superiores sobre plazos de entrega y recursos necesarios para el proyecto.',
  },
];

export default function Comunicacion() {
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
              2. Comunicación
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ¿Qué es la comunicación?
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              La comunicación es la forma en que compartimos lo que pensamos, sentimos o necesitamos
              con otras personas. Está presente en nuestro día a día y nos ayuda a entendernos,
              trabajar juntos y expresar nuestras ideas.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Why important + visual */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 gradient-border rounded-2xl p-6 bg-[#0f0f1a]">
            <h2
              className="text-xl font-semibold text-white mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ¿Por qué es importante?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl bg-[#16162a] p-4 border border-white/5 card-hover"
                >
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <h3
                    className="text-white font-medium text-sm mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden flex flex-col justify-end relative min-h-[220px]" style={{
            background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 40%, #d946ef 100%)'
          }}>
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative p-6">
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Comunicación
              </h3>
              <p className="text-white/60 text-sm">Personas + ideas + tecnología</p>
            </div>
          </div>
        </div>

        {/* Software context */}
        <div className="rounded-2xl bg-[#0f0f1a] border border-white/5 p-8 mb-10">
          <h2
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Comunicación asertiva en el desarrollo de software
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-3xl">
            La comunicación asertiva es fundamental para el desempeño exitoso de un tecnólogo en
            Análisis y Desarrollo de Software. Permite la claridad en la transmisión de ideas,
            facilita la resolución de problemas, fomenta un ambiente de trabajo colaborativo y
            mejora la relación con clientes y colegas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={b.title} className="group rounded-xl bg-[#16162a] border border-white/5 p-5 card-hover">
                <div
                  className="text-xs text-purple-400/60 font-mono mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="text-white text-sm font-semibold mb-2 group-hover:text-purple-200 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {b.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-white/20 text-xs italic">
          En resumen, la comunicación asertiva es una habilidad esencial para un tecnólogo en
          ADSO, ya que contribuye a un trabajo más eficiente, colaborativo y exitoso.
        </div>
      </div>
    </div>
  );
}

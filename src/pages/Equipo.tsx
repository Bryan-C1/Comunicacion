import { Link } from 'react-router';

const members = [
  {
    name: 'Brayan Córdoba',
    role: 'Analista y desarrollador de software',
    initial: 'B',
    color: 'from-purple-600 to-fuchsia-600',
    desc: 'Soy analista y desarrollador de software. Me interesa principalmente la programación y entender cómo funcionan las aplicaciones desde su parte lógica. Me gusta practicar y buscar diferentes formas de resolver un mismo problema. Suelo aportar mis ideas cuando tengo algo que puede ayudar al grupo y trato de explicarlo de una manera sencilla.',
    skills: ['Lógica de programación', 'Trabajo en equipo', 'Resolución de problemas'],
  },
  {
    name: 'Valentina Molina',
    role: 'Analista y desarrolladora de software',
    initial: 'V',
    color: 'from-fuchsia-600 to-pink-500',
    desc: 'Soy analista y desarrolladora de software. La programación es uno de los temas que más me interesa porque me gusta ver cómo una idea puede convertirse poco a poco en algo que funciona. Quiero seguir practicando para sentirme cada vez más segura con el código. Cuando trabajo en grupo, intento explicar mis ideas con claridad y también tener en cuenta las propuestas de mis compañeros.',
    skills: ['Programación', 'Comunicación clara', 'Pensamiento lógico'],
  },
  {
    name: 'Camilo Vargas',
    role: 'Analista y desarrollador de software',
    initial: 'C',
    color: 'from-violet-600 to-purple-500',
    desc: 'Soy analista y desarrollador de software. Me interesa conocer más sobre las bases de datos y la manera en que se organiza la información dentro de un sistema. Me gusta aprender haciendo ejercicios y probando lo que voy aprendiendo. Me gusta trabajar en equipo, escuchar diferentes puntos de vista y aportar cuando tengo una idea o una posible solución.',
    skills: ['Bases de datos', 'Trabajo colaborativo', 'Aprendizaje práctico'],
  },
];

export default function Equipo() {
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
              5. Nuestro equipo
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Nuestro equipo
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Somos tres analistas y desarrolladores de software con diferentes intereses y formas
              de trabajar. Nuestro conocimiento nos permite aportar distintas perspectivas al
              desarrollo de soluciones tecnológicas.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Member cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl bg-[#0f0f1a] border border-white/5 overflow-hidden card-hover"
            >
              <div className={`h-24 bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                <div className="w-14 h-14 rounded-full bg-black/30 border-2 border-white/20 flex items-center justify-center">
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {m.initial}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-white mb-0.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {m.name}
                </h3>
                <p className="text-purple-400 text-xs mb-4">{m.role}</p>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formation box */}
        <div className="rounded-2xl bg-[#0f0f1a] border border-white/5 p-8">
          <h2
            className="text-xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Nuestra formación
          </h2>
          <p className="text-white/45 text-sm leading-relaxed">
            Como analistas y desarrolladores de software, seguimos fortaleciendo nuestra experiencia
            a través de actividades, proyectos y prácticas. Cada trabajo nos permite aportar nuevas
            ideas y prepararnos para los retos del área de tecnología. La comunicación efectiva ha
            sido una herramienta clave en nuestro trabajo colaborativo.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router';

const retos = [
  {
    number: 'RETO 01',
    name: 'Brayan Córdoba',
    situacion:
      'Mi reto estuvo relacionado con la comunicación con una persona cercana. En algunas situaciones me costaba expresar lo que pensaba y terminábamos entendiendo las cosas de una manera diferente.',
    origen:
      'Con el tiempo me di cuenta de que el problema estaba principalmente en no decir las cosas con suficiente claridad y en asumir lo que la otra persona quería decir antes de escucharla completamente.',
    cambio:
      'Empecé a escuchar mejor antes de responder y a organizar mis ideas para poder explicar lo que pensaba sin generar más confusiones.',
    resultado:
      'La comunicación fue mejorando porque pudimos entendernos con más tranquilidad y evitar varios malentendidos.',
  },
  {
    number: 'RETO 02',
    name: 'Valentina Molina',
    situacion:
      'Mi reto fue con mi hermana. Durante varios años discutíamos constantemente, no teníamos muy buena comunicación y muchas veces ninguna de las dos se tomaba el tiempo de escuchar realmente a la otra.',
    origen:
      'Esto empezó cuando éramos más pequeñas. Las dos éramos bastante sensibles y nos enojábamos fácilmente. Además, había mucha falta de escucha e interpretábamos las palabras de la otra de una manera personal.',
    cambio:
      'Empezamos a escucharnos más, a pensar antes de hablar y a buscar una manera diferente de expresar lo que sentíamos sin convertir cada diferencia en una pelea.',
    resultado:
      'La relación mejoró mucho. Actualmente tenemos una comunicación muy bonita, nos escuchamos, nos aconsejamos y tenemos mucha más confianza.',
  },
  {
    number: 'RETO 03',
    name: 'Camilo Vargas',
    situacion:
      'Todo empezó por un malentendido bastante tonto con un gran amigo de toda la vida. La raíz del problema fue la falta de comunicación y el orgullo: ninguno de los dos quiso dar su brazo a torcer a tiempo por una discusión sin importancia sobre un plan que habíamos armado para el fin de semana. Lo que estuvo mal fue que dejamos que los malos entendidos y los mensajes cortantes se acumularan, asumiendo cosas que el otro nunca quiso decir.',
    origen:
      'Para sobrellevar la situación, la tensión se volvió insoportable porque nos veíamos frecuentemente y el ambiente era totalmente frío y cortante, lo cual me afectaba bastante anímicamente porque valoraba mucho esa amistad.',
    cambio:
      'Lo solucioné un día que decidí dejar el orgullo a un lado. Lo llamé, le propuse vernos en un café para hablar cara a cara y le dije con total sinceridad lo que sentía, sin buscar culpables sino soluciones.',
    resultado:
      'Hablar de frente, mirarnos a los ojos y expresar las cosas a tiempo me enseñó que un pequeño orgullo puede arruinar una relación valiosa si no se abren los canales de diálogo a la primera oportunidad.',
  },
];

export default function Reto() {
  return (
    <div className="min-h-screen bg-[#07070f] pt-14">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <div
              className="inline-flex px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              4. Reto
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Un reto que nos ayudó
              <br />
              <span className="gradient-text">a comunicarnos mejor</span>
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Más allá de las actividades de clase, también identificamos situaciones de nuestra
              vida cotidiana en las que la comunicación podía mejorar. Reconocer el problema,
              entender su origen y buscar una forma diferente de comunicarnos nos permitió aprender
              desde nuestras propias experiencias.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Context box */}
        <div className="rounded-2xl bg-[#0f0f1a] border border-white/5 p-6 mb-10">
          <h2
            className="text-lg font-semibold text-white mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ¿En qué consistió nuestro reto?
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-4xl">
            El reto consistió en identificar una dificultad real que tuviéramos al comunicarnos con
            otra persona, analizar desde cuándo ocurría y qué podía estar causando el problema.
            Después pensamos en qué podíamos cambiar desde nuestra forma de comunicarnos para lograr
            una relación más tranquila y comprensiva.
          </p>
        </div>

        {/* Individual challenges */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {retos.map((r) => (
            <div key={r.name} className="rounded-2xl bg-[#0f0f1a] border border-white/5 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
              <div className="p-6">
                <div
                  className="text-xs text-purple-400/60 font-mono mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {r.number}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {r.name}
                </h3>

                <div className="flex flex-col gap-3">
                  {[
                    { label: 'SITUACIÓN', text: r.situacion },
                    { label: '¿DE DÓNDE VENÍA?', text: r.origen },
                    { label: '¿QUÉ CAMBIÉ?', text: r.cambio },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-[#16162a] p-3">
                      <div
                        className="text-[10px] font-mono text-purple-400/60 mb-1 tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.label}
                      </div>
                      <p className="text-white/55 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}

                  <div className="rounded-lg bg-purple-900/20 border border-purple-500/20 p-3">
                    <div
                      className="text-[10px] font-mono text-purple-300/60 mb-1 tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      RESULTADO
                    </div>
                    <p className="text-purple-100/70 text-xs leading-relaxed">{r.resultado}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway */}
        <div className="rounded-2xl bg-[#0f0f1a] border border-white/5 p-8">
          <h2
            className="text-xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Lo que nos llevamos
          </h2>
          <p className="text-white/45 text-sm leading-relaxed">
            Este reto nos permitió entender que los problemas de comunicación no siempre aparecen
            porque las personas no se lleven bien, sino que muchas veces están relacionados con la
            forma en que expresamos nuestras ideas, la disposición que tenemos para escuchar y el
            respeto que demostramos hacia los demás. Reconocer eso fue el primer paso para mejorar.
          </p>
        </div>
      </div>
    </div>
  );
}

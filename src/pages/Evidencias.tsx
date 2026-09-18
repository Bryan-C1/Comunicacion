import { useState } from 'react';
import { Link } from 'react-router';

const members = ['Brayan Córdoba', 'Valentina Molina', 'Camilo Vargas'];

function getEvidenceUrl(file?: string) {
  return file
    ? `https://media.githubusercontent.com/media/Bryan-C1/Comunicacion/main${file}`
    : undefined;
}

const evidencias: Record<string, { id: string; title: string; subtitle: string; color: string; file?: string }[]> = {
  'Brayan Córdoba': [
    {
      id: '01',
      title: 'Evidencia 1',
      subtitle: 'Taller — Tipos de Comunicación',
      color: 'from-purple-700 to-fuchsia-700',
      file: '/evidencias/brayan-cordoba/evidencia_1b.pdf',
    },
    {
      id: '02',
      title: 'Evidencia 2',
      subtitle: 'Funciones del Lenguaje — Poética',
      color: 'from-blue-700 to-purple-700',
      file: '/evidencias/brayan-cordoba/evidencia_2b.pdf',
    },
    {
      id: '03',
      title: 'Evidencia 3',
      subtitle: 'Comunicación no Verbal — Kinesis',
      color: 'from-teal-700 to-blue-700',
      file: '/evidencias/brayan-cordoba/evidencia_3b.pdf',
    },
  ],
  'Valentina Molina': [
    {
      id: '01',
      title: 'Evidencia 1',
      subtitle: 'Taller — Tipos de Comunicación',
      color: 'from-fuchsia-700 to-pink-700',
      file: '/evidencias/valentina-molina/evidencia_1v.pdf',
    },
    {
      id: '02',
      title: 'Evidencia 2',
      subtitle: 'Funciones del Lenguaje — Apelativa',
      color: 'from-blue-700 to-indigo-700',
      file: '/evidencias/valentina-molina/evidencia_2v.pdf',
    },
    {
      id: '03',
      title: 'Evidencia 3',
      subtitle: 'Comunicación no Verbal — Proxemia',
      color: 'from-emerald-700 to-teal-700',
      file: '/evidencias/valentina-molina/evidencia_3v.pdf',
    },
  ],
  'Camilo Vargas': [
    {
      id: '01',
      title: 'Evidencia 1',
      subtitle: 'Taller — Tipos de Comunicación',
      color: 'from-violet-700 to-purple-700',
      file: '/evidencias/camilo-vargas/evidencia_1c.pdf',
    },
    {
      id: '02',
      title: 'Evidencia 2',
      subtitle: 'Funciones del Lenguaje — Referencial',
      color: 'from-sky-700 to-blue-700',
      file: '/evidencias/camilo-vargas/evidencia_2c.pdf',
    },
    {
      id: '03',
      title: 'Evidencia 3',
      subtitle: 'Comunicación no Verbal — Proxemia',
      color: 'from-green-700 to-teal-700',
      file: '/evidencias/camilo-vargas/evidencia_3c.pdf',
    },
  ],
};

export default function Evidencias() {
  const [activeTab, setActiveTab] = useState(members[0]);

  return (
    <div className="min-h-screen bg-[#07070f] pt-14">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <div
              className="inline-flex px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              6. Evidencias
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Evidencias de aprendizaje
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Explora las actividades, trabajos y experiencias que hacen parte de nuestro proceso de
              aprendizaje durante el trimestre.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {members.map((m) => (
            <button
              key={m}
              onClick={() => setActiveTab(m)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeTab === m
                  ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
                  : 'border border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Evidence cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {evidencias[activeTab].map((ev) => (
            <div
              key={ev.id}
              className="rounded-2xl bg-[#0f0f1a] border border-white/5 overflow-hidden card-hover"
            >
              <div className={`h-36 bg-gradient-to-br ${ev.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center px-4">
                  <div
                    className="text-xs font-mono text-white/60 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Evidencia {ev.id}
                  </div>
                  <div className="text-white/40 text-xs">{ev.subtitle.split(' — ')[1]}</div>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {ev.title}
                </h3>
                <p className="text-white/40 text-xs mb-4">{ev.subtitle}</p>
                {ev.file ? (
                  <a
                    href={getEvidenceUrl(ev.file)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all"
                  >
                    Ver archivo
                  </a>
                ) : (
                  <button className="text-xs px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all">
                    Ver archivo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All members summary */}
        <div className="mt-12 rounded-2xl bg-[#0f0f1a] border border-white/5 p-6">
          <h2
            className="text-lg font-semibold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Todas las evidencias
          </h2>
          <div className="flex flex-col gap-6">
            {members.map((member) => (
              <div key={member}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px flex-1 bg-white/5" />
                  <span
                    className="text-white/50 text-sm font-medium"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {member}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {evidencias[member].map((ev) => (
                    <a
                      key={ev.id}
                      href={getEvidenceUrl(ev.file)}
                      target={ev.file ? '_blank' : undefined}
                      rel={ev.file ? 'noreferrer' : undefined}
                      className="flex items-center gap-3 rounded-xl bg-[#16162a] border border-white/5 p-3"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${ev.color} flex-shrink-0`} />
                      <div>
                        <div className="text-white text-xs font-medium">{ev.title}</div>
                        <div className="text-white/30 text-[10px]">{ev.subtitle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

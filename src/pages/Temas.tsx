import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { topics } from '../data/temas';

export default function Temas() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();
  const active = topics.find((t) => t.id === selected);

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
              3. Temas vistos
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Temas trabajados durante el trimestre
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Durante el trimestre exploramos diferentes formas de comunicación, el uso del lenguaje
              y las maneras en que podemos transmitir nuestras ideas de forma clara y efectiva.
            </p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Topic list */}
          <div className="flex flex-col gap-3">
            {topics.map((topic) => (
              <div
                key={topic.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(topic.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelected(topic.id);
                  }
                }}
                className={`text-left rounded-2xl p-6 border transition-all duration-200 ${
                  selected === topic.id
                    ? 'border-purple-500/40 bg-[#0f0f1a] glow-purple'
                    : 'border-white/5 bg-[#0f0f1a] hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs text-white/25 font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {topic.id} / {String(topics.length).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      selected === topic.id
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'bg-white/5 text-white/30'
                    }`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {topic.tag}
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-transparent mb-3" />
                <h3
                  className={`text-base font-semibold mb-2 transition-colors ${
                    selected === topic.id ? 'text-purple-200' : 'text-white'
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {topic.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{topic.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <Link
                    to={`/temas/${topic.id}`}
                    onClick={(event) => event.stopPropagation()}
                    className="text-purple-500/60 hover:text-fuchsia-400 transition-colors"
                  >
                    Ver tema completo →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="md:sticky md:top-20 self-start">
            {active ? (
              <div
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/temas/${active.id}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    navigate(`/temas/${active.id}`);
                  }
                }}
                className={`rounded-2xl bg-gradient-to-br ${active.color} border border-white/10 p-8 min-h-[300px]`}
              >
                <div
                  className="text-xs font-mono text-white/40 mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  TEMA {active.id}
                </div>
                <h2
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {active.title}
                </h2>
                <p className="text-white/60 leading-relaxed text-sm">{active.detail}</p>
                <Link
                  to={`/temas/${active.id}`}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex mt-6 rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                >
                  Tema completo →
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 min-h-[300px] flex items-center justify-center">
                <p className="text-white/25 text-sm text-center">
                  Selecciona un tema para ver más detalles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

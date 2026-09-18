import { Link, useParams } from 'react-router';
import { getTopicById } from '../data/temas';

export default function TemaDetalle() {
  const { topicId } = useParams();
  const topic = topicId ? getTopicById(topicId) : undefined;

  if (!topic) {
    return (
      <div className="min-h-screen bg-[#07070f] pt-14 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white/50 mb-5">No encontramos ese tema.</p>
          <Link to="/temas" className="text-purple-300 hover:text-white transition-colors">
            Volver a temas
          </Link>
        </div>
      </div>
    );
  }

  if (topic.id !== '01') {
    return (
      <div className="min-h-screen bg-[#07070f] pt-14">
        <main className="max-w-5xl mx-auto px-6 py-16">
          <Link to="/temas" className="text-sm text-white/45 hover:text-white transition-colors">
            Volver a temas
          </Link>

          <header className={`mt-8 rounded-2xl bg-gradient-to-br ${topic.color} border border-white/10 p-8 md:p-12`}>
            <div className="text-xs font-mono text-white/45 mb-4">TEMA {topic.id} / {topic.tag}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {topic.title}
            </h1>
            <p className="text-white/75 leading-relaxed max-w-3xl">{topic.desc}</p>
          </header>

          <section className="mt-10 grid md:grid-cols-[0.8fr_1.2fr] gap-8">
            <div>
              <p className="text-xs font-mono text-purple-300/70 mb-3">IDEA PRINCIPAL</p>
              <p className="text-white/60 leading-relaxed">{topic.detail}</p>
            </div>
            <div className="grid gap-3">
              {topic.sections.map((section) => (
                <article key={section.title} className="rounded-xl border border-white/10 bg-[#0f0f1a] p-5">
                  <h2 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {section.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed">{section.content}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  const cards = topic.sections;

  return (
    <div className="topic-board-page" id="top">
      <main className="topic-board">
        <div className="topic-board-topbar">
          <Link to="/temas" className="topic-board-link">Temas</Link>
          <button className="topic-menu" aria-label="Más opciones">
            <span />
            <span />
            <span />
          </button>
        </div>

        <header className="topic-board-intro">
          <span>IDEA PRINCIPAL</span>
          <p>{topic.detail}</p>
        </header>

        <section className="topic-board-grid">
          {cards.map((section, index) => (
            <article
              className={`topic-board-card ${index === cards.length - 1 ? 'topic-board-card-last' : ''}`}
              id={`concepto-${index + 1}`}
              key={section.title}
            >
              <h2>{section.title.replace(/^\d+\.\s*/, '')}</h2>
              <p>{section.content}</p>
            </article>
          ))}

          {cards.length < 6 && (
            <article className="topic-board-card topic-board-summary">
              <span className="topic-summary-label">{cards.length} ideas</span>
              <p>Cada parte de este tema cumple un papel distinto en cómo transmitimos y recibimos mensajes.</p>
              <Link to="/temas" className="topic-board-link">Ver otros temas</Link>
            </article>
          )}
        </section>

        <div className="topic-board-footer">
          <span>{topic.title}</span>
          <Link to="/temas" className="topic-back-button">Volver a temas</Link>
        </div>
      </main>
    </div>
  );

}
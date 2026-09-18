import { NavLink } from 'react-router';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/comunicacion', label: 'Comunicación' },
  { to: '/temas', label: 'Temas' },
  { to: '/reto', label: 'Reto' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/evidencias', label: 'Evidencias' },
  { to: '/reflexiones', label: 'Reflexiones' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#07070f]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <span
          className="font-mono text-sm font-medium text-white/80 tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          &lt;/&gt; ComuniCode
        </span>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${
                  isActive
                    ? 'text-white bg-white/5 border border-white/10'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`
              }
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </NavLink>
          ))}
        </div>
        {/* Mobile: scrollable links */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto max-w-xs">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-2 py-1 rounded text-xs whitespace-nowrap transition-all ${
                  isActive ? 'text-white bg-white/10' : 'text-white/50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

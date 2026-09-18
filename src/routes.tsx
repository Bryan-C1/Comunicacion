import { createBrowserRouter, Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Comunicacion from './pages/Comunicacion';
import Temas from './pages/Temas';
import TemaDetalle from './pages/TemaDetalle';
import Reto from './pages/Reto';
import Equipo from './pages/Equipo';
import Evidencias from './pages/Evidencias';
import Reflexiones from './pages/Reflexiones';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Root,
      children: [
        { index: true, Component: Inicio },
        { path: 'comunicacion', Component: Comunicacion },
        { path: 'temas', Component: Temas },
        { path: 'temas/:topicId', Component: TemaDetalle },
        { path: 'reto', Component: Reto },
        { path: 'equipo', Component: Equipo },
        { path: 'evidencias', Component: Evidencias },
        { path: 'reflexiones', Component: Reflexiones },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

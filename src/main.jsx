import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Tervehdys from './tervehdys.jsx';
import OpiskelijaTiedot from './OpiskelijaTiedot.jsx';
import Infolista from './Infolista.jsx';

const tiedot = ["React", "JavaScript", "CSS"];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tervehdys name="figo" />
    <OpiskelijaTiedot />
    <Infolista taulukko={tiedot} />
  </StrictMode>,
);

import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarreNavigation } from './BarreNavigation';
import { pageAccueil } from './pages/pageAccueil';
import { pageAdministration } from './pages/pageAdministration';
import { pageAjouter } from './pages/pageAjouter';
import { pageModifier } from './pages/pageModifier';
import { pageRepertoire } from './pages/pageRepertoire';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <BarreNavigation />
        <Routes>
          <Route path='/' element={<pageAcceuil />}/>
          <Route path='/admin' element={<pageAdministration />}/>
          <Route path='/ajout' element={<pageAjouter />}/>
          <Route path='/modifier' element={<pageModifier />}/>
          <Route path='/repertoire' element={<pageRepertoire />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

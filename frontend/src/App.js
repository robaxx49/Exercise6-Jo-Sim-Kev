import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarreNavigation } from './BarreNavigation';
import { PageAccueil } from './pages/pageAccueil';
import { PageAdministration } from './pages/pageAdministration';
import { PageAjouter } from './pages/pageAjouter';
import { PageModifier } from './pages/pageModifier';
import { PageRepertoire } from './pages/pageRepertoire';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <BarreNavigation />
        <Routes>
          <Route path='/' element={<PageAccueil />}/>
          <Route path='/admin' element={<PageAdministration />}/>
          <Route path='/ajout' element={<PageAjouter />}/>
          <Route path='/modifier' element={<PageModifier />}/>
          <Route path='/repertoire' element={<PageRepertoire />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

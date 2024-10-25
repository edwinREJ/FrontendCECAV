import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';
import Layout from './components/home/Layout'
import Start from './components/start/Start';
import About from './components/about/About';
import Evento from './components/events/CardEvent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>   
        <Route index element={<Navigate to="/start" />} /> 
        <Route path="start" element={<Start />}>
          <Route path="new" element={<Evento />} />
          <Route index element={<Navigate to="/start/new" />} />
        </Route>
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </>
)
export default App;

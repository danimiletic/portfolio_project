import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Skills from './components/shared/Skills';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/shared/Navbar';
import ContactShow from './components/contacts/ContactShow';

const App = () => (
  <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/contacts/:contactId' element={<ContactShow />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
  </>
)
export default App;

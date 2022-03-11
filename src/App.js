import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/home'
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

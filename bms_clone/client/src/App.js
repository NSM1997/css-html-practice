import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import "./stylesheets/theme.css"
import "./stylesheets/alignments.css"
import "./stylesheets/custom.css"
import "./stylesheets/form-elements.css"
import "./stylesheets/sizes.css"

function App() {
  return (
    <div>
      <BrowserRouter>
       <Router>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
       </Router>      
      </BrowserRouter>
    </div>
  );
}

export default App;

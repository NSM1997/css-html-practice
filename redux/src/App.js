import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store'
import Mock from './components/Mock';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
            path='/' element={<Home />}
            ></Route>
            <Route
            path='/cart' element={<Cart />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider> */}
      <Mock />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          /> 
          <Route
            path="/Watchlist"
            element={
              <Watchlist />
            }
          />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;

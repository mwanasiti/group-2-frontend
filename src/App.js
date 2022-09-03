import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="RouteSection">
        <Header />
        <Navbar/>
        <Routes>
          <Route exact='true' path='/' element={<HomePage />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

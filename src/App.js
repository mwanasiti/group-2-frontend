import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="RouteSection">
        <Header />
        <Routes>
          <Route exact='true' path='/' element={<HomePage />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="RouteSection">
        
        <Display/>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

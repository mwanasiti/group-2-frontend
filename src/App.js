import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <div
    className ="App">
       
      <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    </Router>
  

  </div>
    
  );
}

export default App;

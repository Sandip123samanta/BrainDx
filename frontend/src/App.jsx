import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Predict from './pages/Predict';
import NavBar from './components/Ui/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </Router>
  );
}

export default App;

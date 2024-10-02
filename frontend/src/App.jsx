import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Predict from './pages/Predict';
import NavBar from './components/Ui/NavBar';
import Footer from './components/Ui/Footer/Footer';
import Lenis from 'lenis';
import { useEffect } from 'react';
import 'lenis/dist/lenis.css';
import StarCanvas from './components/HeroSection/StarCanvas';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Router>
      <NavBar />
      <StarCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

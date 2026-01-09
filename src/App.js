import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Router className="App-Router">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

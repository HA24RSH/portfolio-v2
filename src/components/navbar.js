import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

export const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner content-col">
        <div className="navbar__links">
          <Link to="/" className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}>Home</Link>
          <Link to="/work" className={`navbar__link ${isActive('/work') ? 'navbar__link--active' : ''}`}>Work</Link>
          <Link to="/blog" className={`navbar__link ${isActive('/blog') ? 'navbar__link--active' : ''}`}>Blog</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Resume
          </a>
        </div>

        <div className="navbar__actions">
          <button className="navbar__search" aria-label="Search">
            <SearchIcon sx={{ fontSize: 16 }} />
            <span className="navbar__search-text">Search</span>
            <kbd className="navbar__kbd">⌘ K</kbd>
          </button>
          <button className="navbar__theme" aria-label="Toggle theme">
            <DarkModeIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

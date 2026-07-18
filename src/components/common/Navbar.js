import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { navLinks } from '../../config/navbar';
import { blogs as allBlogs } from '../../data/blogData';
import './Navbar.css';

export const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard shortcut Ctrl/Cmd+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const isActive = (path) => location.pathname === path;

  const filteredBlogs = allBlogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner content-col">
          <div className="navbar__links">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`navbar__link ${isActive(l.path) ? 'navbar__link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="navbar__actions">
            <button
              className="navbar__search"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon sx={{ fontSize: 14 }} />
              <span className="navbar__search-text">Search</span>
              <kbd className="navbar__kbd">Ctrl K</kbd>
            </button>
            <button
              className="navbar__theme"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark'
                ? <LightModeIcon sx={{ fontSize: 15 }} />
                : <DarkModeIcon sx={{ fontSize: 15 }} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div
            className="search-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-modal__bar">
              <SearchIcon sx={{ fontSize: 16 }} className="search-modal__icon" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search blog posts"
                className="search-modal__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="navbar__kbd">ESC</kbd>
            </div>
            <div className="search-modal__filter">
              <span className="search-modal__filter-label">Filter</span>
              <span className="search-modal__filter-all">All</span>
            </div>
            {searchQuery && (
              <div className="search-modal__results">
                {filteredBlogs.length === 0 ? (
                  <p className="search-modal__empty">No results found</p>
                ) : (
                  filteredBlogs.map((b, i) => (
                    <Link
                      key={i}
                      to="/blog"
                      className="search-modal__result"
                      onClick={() => setSearchOpen(false)}
                    >
                      <span className="search-modal__result-title">{b.title}</span>
                      <span className="search-modal__result-sub">{b.subtitle}</span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

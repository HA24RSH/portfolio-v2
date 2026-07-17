import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import './Footer.css';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Work',     to: '/work' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Resume',   to: '/resume' },
  { label: 'Projects', to: '/work' },
  { label: 'Gears',    to: '#' },
  { label: 'Setup',    to: '#' },
  { label: 'Terminal', to: '#' },
  { label: 'Books',    to: '#' },
  { label: 'Movies',   to: '#' },
];

const socials = [
  { icon: <XIcon sx={{ fontSize: 17 }} />,        href: 'https://x.com/haarshhqt',                          label: 'X' },
  { icon: <LinkedInIcon sx={{ fontSize: 17 }} />, href: 'https://www.linkedin.com/in/harshvardhan-gadagade/', label: 'LinkedIn' },
  { icon: <GitHubIcon sx={{ fontSize: 17 }} />,   href: 'https://github.com/HA24RSH',                        label: 'GitHub' },
  { icon: <EmailIcon sx={{ fontSize: 17 }} />,    href: 'mailto:harshvardhangadagade24@gmail.com',            label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner content-col">
        <div className="footer__cols">
          <div className="footer__col">
            <p className="footer__heading">NAVIGATE</p>
            <div className="footer__links">
              {navLinks.map((l, i) => (
                <Link to={l.to} key={i} className="footer__link">{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="footer__col footer__col--right">
            <p className="footer__heading">CONNECT</p>
            <div className="footer__icons">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Harshvardhan Gadagade. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

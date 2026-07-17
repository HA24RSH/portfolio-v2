import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import logo from '../assets/PFP-3-bg-rm.png';
import './Hero.css';
import { useState } from 'react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshvardhangadagade24@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="hero" id="home-section">
      <div className="hero__top">
        <div className="hero__avatar-wrap">
          <img src={logo} alt="Harshvardhan Gadagade" className="hero__avatar" />
        </div>
        <div className="hero__identity">
          <h1 className="hero__name">Harshvardhan Gadagade</h1>
          <p className="hero__meta">
            <span>Engineer</span>
            <span className="hero__dot">·</span>
            <span>Builder</span>
            <span className="hero__dot">·</span>
            <span className="hero__email">harshvardhangadagade24@gmail.com</span>
            <button
              className={`hero__copy ${copied ? 'hero__copy--done' : ''}`}
              onClick={handleCopyEmail}
              title="Copy email"
              aria-label="Copy email"
            >
              <ContentCopyIcon sx={{ fontSize: 13 }} />
            </button>
          </p>
        </div>
      </div>

      <p className="hero__bio">
        Love to build cool stuff — full-stack engineer & tinkerer obsessed with clean code and great UX.
      </p>

      <div className="hero__socials">
        <a href="https://x.com/haarshhqt" target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="X / Twitter">
          <XIcon sx={{ fontSize: 18 }} />
        </a>
        <a href="https://github.com/HA24RSH" target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="GitHub">
          <GitHubIcon sx={{ fontSize: 18 }} />
        </a>
        <a href="https://www.linkedin.com/in/harshvardhan-gadagade/" target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="LinkedIn">
          <LinkedInIcon sx={{ fontSize: 18 }} />
        </a>
        <a href="mailto:harshvardhangadagade24@gmail.com" className="hero__icon" aria-label="Email">
          <EmailIcon sx={{ fontSize: 18 }} />
        </a>
      </div>
    </section>
  );
};
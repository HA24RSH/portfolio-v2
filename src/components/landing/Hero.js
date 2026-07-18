import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import logo from '../../assets/PFP-3-bg-rm.png';
import siteConfig from '../../config/site';
import './Hero.css';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="hero" id="home-section">
      <div className="hero__top">
        <div className="hero__avatar-wrap">
          <img src={logo} alt={siteConfig.name} className="hero__avatar" />
        </div>
        <div className="hero__identity">
          <h1 className="hero__name">{siteConfig.name}</h1>
          <p className="hero__meta">
            <span>Engineer</span>
            <span className="hero__dot">·</span>
            <span>Builder</span>
            <span className="hero__dot">·</span>
            <span className="hero__email">{siteConfig.email}</span>
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

      <p className="hero__bio">{siteConfig.bio}</p>

      <div className="hero__socials">
        <a href={siteConfig.twitter}  target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="X / Twitter">
          <XIcon sx={{ fontSize: 18 }} />
        </a>
        <a href={siteConfig.github}   target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="GitHub">
          <GitHubIcon sx={{ fontSize: 18 }} />
        </a>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hero__icon" aria-label="LinkedIn">
          <LinkedInIcon sx={{ fontSize: 18 }} />
        </a>
        <a href={`mailto:${siteConfig.email}`} className="hero__icon" aria-label="Email">
          <EmailIcon sx={{ fontSize: 18 }} />
        </a>
      </div>
    </section>
  );
};
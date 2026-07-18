import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import siteConfig from '../../config/site';
import './ResumePage.css';

export const ResumePage = () => {
  return (
    <div className="resume-page content-col">
      <section className="resume-page__section">
        <h1 className="section-title">Resume</h1>
        <p className="resume-page__subtitle">View and download my professional resume.</p>

        <div className="resume-page__viewer">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-page__open-btn"
            aria-label="Open resume in new tab"
          >
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </a>
          <iframe
            src={siteConfig.resumeUrl}
            title="Resume"
            className="resume-page__iframe"
          />
        </div>
      </section>
    </div>
  );
};

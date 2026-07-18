import GitHubIcon from '@mui/icons-material/GitHub';
import projects from '../data/projectData';
import './Work.css';

export const Work = () => {
  return (
    <div className="work content-col">
      <section className="work__section">
        <h1 className="section-title">Work &amp; Projects</h1>
        <p className="work__subtitle">A selection of things I've built.</p>
        <div className="work__grid">
          {projects.map((p, i) => (
            <div className="work__card" key={i}>
              <div className="work__card-img-wrap">
                <img src={p.img} alt={p.title} className="work__card-img" />
              </div>
              <div className="work__card-body">
                <h2 className="work__card-title">{p.title}</h2>
                <p className="work__card-desc">{p.description}</p>
                <a href={p.gitHub} target="_blank" rel="noopener noreferrer" className="work__card-link">
                  <GitHubIcon sx={{ fontSize: 15 }} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

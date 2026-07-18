import experiences from '../../data/experienceData';
import './Experience.css';

export const Experience = () => {
  return (
    <section className="exp" id="work-section">
      <h2 className="section-title">Experience</h2>

      <div className="exp__list">
        {experiences.map((exp, i) => (
          <div className="exp__item" key={i}>
            <div className="exp__left">
              <div className="exp__company-row">
                <span className="exp__company">{exp.company}</span>
                {exp.badge && (
                  <span className="exp__badge">
                    <span className="exp__badge-dot" />
                    {exp.badge}
                  </span>
                )}
              </div>
              <span className="exp__role">{exp.role}</span>
            </div>
            <div className="exp__right">
              <span className="exp__period">{exp.period}</span>
              <span className="exp__location">{exp.location}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="exp__footer">
        <button className="ghost-btn">Show all work experiences</button>
      </div>
    </section>
  );
};

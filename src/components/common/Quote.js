import siteConfig from '../../config/site';
import './Quote.css';

export const Quote = () => {
  return (
    <section className="quote-section">
      <blockquote className="quote">
        <span className="quote__mark">"</span>
        <p className="quote__text">{siteConfig.quote.text}</p>
        <footer className="quote__author">{siteConfig.quote.author}</footer>
      </blockquote>
    </section>
  );
};

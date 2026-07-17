import './Quote.css';

export const Quote = () => {
  return (
    <section className="quote-section">
      <blockquote className="quote">
        <span className="quote__mark">"</span>
        <p className="quote__text">
          "The secret of getting ahead is getting started."
        </p>
        <footer className="quote__author">— Mark Twain</footer>
      </blockquote>
    </section>
  );
};

import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import blogs from '../../data/blogData';
import './Blog.css';

export const Blog = () => {
  return (
    <section className="blog" id="blog-section">
      <h2 className="section-title">Blog</h2>

      <div className="blog__list">
        {blogs.map((post, i) => (
          <div key={i} className="blog__item">
            <div className="blog__info">
              <Link to={`/blog/${post.slug}`}>
                <h3 className="blog__title">{post.title}</h3>
              </Link>
              <p className="blog__subtitle">{post.subtitle}</p>
              <span className="blog__date">
                <CalendarTodayIcon sx={{ fontSize: 11 }} />
                {post.date}
              </span>
            </div>
            <Link to={`/blog/${post.slug}`} className="blog__read">
              Read more <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Link>
          </div>
        ))}
      </div>

      <div className="blog__footer">
        <Link to="/blog">
          <button className="ghost-btn">Show all blogs</button>
        </Link>
      </div>
    </section>
  );
};

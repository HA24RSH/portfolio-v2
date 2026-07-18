import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blogs } from '../../data/blogData';
import './BlogPage.css';

export const BlogPage = () => {
  return (
    <div className="blogpage content-col">
      <section className="blogpage__section">
        <h1 className="section-title">Blog</h1>
        <p className="blogpage__subtitle">Thoughts, ideas, and learnings.</p>

        <div className="blogpage__list">
          {blogs.map((post, i) => (
            <div key={i} className="blogpage__item">
              <div className="blogpage__info">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="blogpage__title">{post.title}</h2>
                </Link>
                <p className="blogpage__subtitle-text">{post.subtitle}</p>
                <span className="blogpage__date">
                  <CalendarTodayIcon sx={{ fontSize: 11 }} />
                  {post.date}
                </span>
              </div>
              <Link to={`/blog/${post.slug}`} className="blogpage__read">
                Read more <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

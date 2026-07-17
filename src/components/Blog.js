import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import blogs from '../data/blogData';
import './Blog.css';

export const Blog = () => {
  return (
    <section className="blog" id="blog-section">
      <h2 className="section-title">Blog</h2>

      <div className="blog__list">
        {blogs.map((post, i) => (
          <a href={post.slug} key={i} className="blog__item">
            <div className="blog__info">
              <h3 className="blog__title">{post.title}</h3>
              <p className="blog__subtitle">{post.subtitle}</p>
              <span className="blog__date">
                <CalendarTodayIcon sx={{ fontSize: 11 }} />
                {post.date}
              </span>
            </div>
            <span className="blog__read">
              Read more <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </span>
          </a>
        ))}
      </div>

      <div className="blog__footer">
        <button className="ghost-btn">Show all blogs</button>
      </div>
    </section>
  );
};

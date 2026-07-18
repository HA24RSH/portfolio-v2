import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blogs } from '../../data/blogData';
import './BlogPost.css';

// Simple frontmatter parser — no external deps needed
const parseFrontmatter = (raw) => {
  const fmRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = raw.match(fmRegex);
  if (!match) return { meta: {}, content: raw };

  const meta = {};
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      meta[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
    }
  });

  return { meta, content: match[2].trim() };
};

export const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Find the matching blog from index for metadata fallback
  const blogIndex = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`${process.env.PUBLIC_URL}/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((raw) => {
        const { meta: parsedMeta, content: parsedContent } = parseFrontmatter(raw);
        setMeta(parsedMeta);
        setContent(parsedContent);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="blogpost content-col">
        <div className="blogpost__loading">
          <div className="blogpost__spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blogpost content-col">
        <Link to="/blog" className="blogpost__back">
          <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to Blog
        </Link>
        <div className="blogpost__error">
          <h2>Post not found</h2>
          <p>This blog post doesn't exist or has been moved.</p>
        </div>
      </div>
    );
  }

  const title = meta.title || blogIndex?.title || '';
  const subtitle = meta.subtitle || blogIndex?.subtitle || '';
  const date = meta.date || blogIndex?.date || '';

  return (
    <div className="blogpost content-col">
      <Link to="/blog" className="blogpost__back">
        <ArrowBackIcon sx={{ fontSize: 15 }} /> Back to Blog
      </Link>

      <header className="blogpost__header">
        <h1 className="blogpost__title">{title}</h1>
        <p className="blogpost__subtitle">{subtitle}</p>
        <div className="blogpost__date">
          <CalendarTodayIcon sx={{ fontSize: 12 }} />
          <span>{date}</span>
        </div>
      </header>

      <article className="blogpost__body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom renderers for rich styling
            h1: ({ children }) => <h1 className="md-h1">{children}</h1>,
            h2: ({ children }) => <h2 className="md-h2">{children}</h2>,
            h3: ({ children }) => <h3 className="md-h3">{children}</h3>,
            p: ({ children }) => <p className="md-p">{children}</p>,
            a: ({ href, children }) => (
              <a href={href} className="md-a" target="_blank" rel="noopener noreferrer">{children}</a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="md-blockquote">{children}</blockquote>
            ),
            code: ({ inline, className, children }) =>
              inline ? (
                <code className="md-code-inline">{children}</code>
              ) : (
                <div className="md-code-block">
                  <pre><code className={className}>{children}</code></pre>
                </div>
              ),
            ul: ({ children }) => <ul className="md-ul">{children}</ul>,
            ol: ({ children }) => <ol className="md-ol">{children}</ol>,
            li: ({ children }) => <li className="md-li">{children}</li>,
            table: ({ children }) => (
              <div className="md-table-wrap"><table className="md-table">{children}</table></div>
            ),
            th: ({ children }) => <th className="md-th">{children}</th>,
            td: ({ children }) => <td className="md-td">{children}</td>,
            hr: () => <hr className="md-hr" />,
            strong: ({ children }) => <strong className="md-strong">{children}</strong>,
            em: ({ children }) => <em className="md-em">{children}</em>,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

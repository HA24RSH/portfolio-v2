import categories from '../data/categoriesData';
import './Categories.css';

const TileGroup = ({ title, items }) => (
  <div className="cat__group">
    <h2 className="section-title">{title}</h2>
    <div className="cat__tiles">
      {items.map((item, i) => (
        <button key={i} className="cat__tile" type="button">
          <span className="cat__tile-title">{item.title}</span>
          <span className="cat__tile-desc">{item.description}</span>
        </button>
      ))}
    </div>
  </div>
);

export const Categories = () => {
  return (
    <section className="cat" id="categories-section">
      <TileGroup title="Development" items={categories.development} />
      <TileGroup title="Personal" items={categories.personal} />
    </section>
  );
};

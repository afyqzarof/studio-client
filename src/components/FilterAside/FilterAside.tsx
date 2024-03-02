import "./FilterAside.scss";
type FilterAsideProps = {
  filterOptions: any;
  categories: any;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FilterAside = ({
  filterOptions,
  categories,
  handleOptionChange,
}: FilterAsideProps) => {
  return (
    <>
      <div className="categories">
        <input
          type="radio"
          className="categories__radio"
          id="all"
          name="category"
          value="all"
          checked={filterOptions.category === "all" ? true : false}
          onChange={handleOptionChange}
        />
        <label
          className="categories__label categories__label--all"
          htmlFor="all">
          show all
        </label>
        {categories.map((category) => (
          <div key={category.id} className="categories__wrapper">
            <input
              type="radio"
              className="categories__radio"
              id={category.id}
              name="category"
              value={category.id}
              onChange={handleOptionChange}
            />
            <label htmlFor={category.id} className="categories__label">
              {category.label}
            </label>
          </div>
        ))}
      </div>
      <div className="filter">
        <input
          type="radio"
          className="filter__radio"
          id="recent"
          name="filter"
          value="recent"
          checked={filterOptions.filter === "recent" ? true : false}
          onChange={handleOptionChange}
        />
        <label className="filter__label" htmlFor="recent">
          show recent projects first
        </label>
        <input
          type="radio"
          className="filter__radio"
          id="oldest"
          name="filter"
          value="oldest"
          onChange={handleOptionChange}
        />
        <label className="filter__label" htmlFor="oldest">
          show oldest projects first
        </label>
      </div>
    </>
  );
};

export default FilterAside;

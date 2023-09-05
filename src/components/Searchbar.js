import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onSubmit, Error }) => {
  return (
    <div className="Searchbar">
      <header>
        <form
          className="SearchForm"
          onSubmit={evt => {
            evt.preventDefault();
            if (evt.target.elements.query.value === '') {
              Error();
            } else {
              onSubmit(evt.target.elements.query.value);

              evt.target.reset();
            }
          }}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">
              <AiOutlineSearch />
            </span>
          </button>
          <input
            className="SearchForm-input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};

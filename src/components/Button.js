export const Button = ({ onClick, images }) => {
  if (images.length !== 0) {
    return (
      <button
        type="button"
        className="Button"
        onClick={onClick}
      >
        Load more
      </button>
    );
  }
};

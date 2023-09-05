export const Modal = ({ onRequestClose, isOpen, image }) => {
  if (isOpen) {
    return (
      <div className="Overlay" onClick={onRequestClose}>
        <div className="Modal">
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>
    );
  }
};

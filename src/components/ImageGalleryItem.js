
import { useState } from 'react';
import { Modal } from './modal';

// import Modal from 'react-modal';
// Modal.setAppElement('#root');
export const ImageGalleryItem =({image})=> {

const[showModal, setShowModal]=useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  };
 const handleCloseModal = () => {
  setShowModal(false)
  };

    return (
      <div>
        <li className="ImageGalleryItem">
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
            onClick={handleOpenModal}
          />
        </li>
        <Modal
          onRequestClose={handleCloseModal}
          isOpen={showModal}
          image={image}
        />
      </div>
    );
  }


import { nanoid } from 'nanoid';
import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  const imageListItems = images.map(image => (
    <ImageGalleryItem image={image} key={nanoid()} />
  ));
  return <ul className="ImageGallery">{imageListItems}</ul>;
};

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { FetchImages } from './api';
import { Loader } from './Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query==='') {
      return
    }
    async function getImages() {
      setLoading(true);
      try {
        const fetchedImages = await FetchImages(query, page);
        setImages(prevState => [...prevState, ...fetchedImages.hits]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error('Error', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      }
    }
    getImages();
  }, [page, query]);

  const handleLoadMore = () => {
  setPage(prevState => 
   prevState + 1)
   };
  const notify = () =>
    toast.warn('Please, type something!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });

  return (
    <div className="App">
      <Searchbar onSubmit={changeQuery} Error={notify} />
      <ToastContainer />
      {images.length > 0 ? <ImageGallery images={images} /> : null}
      {loading && <Loader />}
      <Button images={images} onClick={handleLoadMore} />
    </div>
  );
};

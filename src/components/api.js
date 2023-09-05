import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const API_KEY = '7728721-8f567dd07946de7960dce4801';

export const FetchImages = async (query, page) => {
  const currentPage = page;
  const searchQuery = query.slice(query.indexOf('/') + 1, query.length);

  const responce = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&per_page=${PER_PAGE}`
  );
  return responce.data;
};

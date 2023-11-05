import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
export async function requestImages(keyword, page) {
  const response = await axios.get(
    `${BASE_URL}?key=40349603-a69e9bba39d2f9bc1a4bb4dfc&q=${keyword}&per_page=12&page=${page}`
  );
  return response.data;
}
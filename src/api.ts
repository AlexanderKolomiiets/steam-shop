import { Product } from './types/product';
import { ProductsDetails } from './types/productDetails';

const BASE_URL = 'steam2.p.rapidapi.com';
const API_KEY = '924f1fcc9cmsh6695c148305c2d8p1e0c92jsne0a97b474af8';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': BASE_URL,
  },
};

export const getGames = (query: string, page: number): Promise<Product[]> => {
  return fetch(`https://steam2.p.rapidapi.com/search/${query}/page/${page}`, options)
    .then(res => res.json());
};

export const getGameDetails = (gameId: string): Promise<ProductsDetails> => {
  return fetch(`https://steam2.p.rapidapi.com/appDetail/${gameId}`, options)
    .then(res => res.json());
};

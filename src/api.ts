import { Product } from './types/product';
import { ProductsDetails } from './types/productDetails';

const BASE_URL = 'steam2.p.rapidapi.com';
const API_KEY = '3913427be6msh1e24da35ed4bdf8p1e7621jsn3208e4aa7e2b';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': BASE_URL,
  },
};

export const getGames = (): Promise<Product[]> => {
  return fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
    .then(res => res.json());
};

export const getGameDetails = (gameId: string): Promise<ProductsDetails> => {
  return fetch(`https://steam2.p.rapidapi.com/appDetail/${gameId}`, options)
    .then(response => response.json());
};

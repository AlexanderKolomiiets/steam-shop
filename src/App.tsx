import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { getGames } from './api';
import { Product } from './types/product';
import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getGames());
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;

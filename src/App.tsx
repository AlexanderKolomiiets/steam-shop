import { useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { getGames } from './api';
import { useAppDispatch } from './app/hooks';
import { actions as productsActions } from './features/productsSlice';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getGames();

      dispatch(productsActions.add(products));
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;

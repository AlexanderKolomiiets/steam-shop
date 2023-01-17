import { useEffect, useState } from 'react';
import { getGames } from '../../api';
import { useAppDispatch } from '../../app/hooks';
import Header from '../../components/Header';
import { Loader } from '../../components/Loader';
import ProductList from '../../components/ProductList';
import { actions as productsActions } from '../../features/productsSlice';

export const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      dispatch(productsActions.clear());
      try {
        const products = await getGames();

        dispatch(productsActions.add(products));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ProductList />
        </>
      )}
    </>
  );
};

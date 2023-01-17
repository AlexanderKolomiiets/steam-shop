import { useEffect, useState } from 'react';
import { getGames } from '../../api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../../components/Header';
import { Loader } from '../../components/Loader';
import ProductList from '../../components/ProductList';
import { actions as productsActions } from '../../features/productsSlice';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.filter.query);
  const queryStatus = useAppSelector((state) => state.filter.queryStatus);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      dispatch(productsActions.clear());
      try {
        const products = await getGames(query);

        dispatch(productsActions.add(products));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [queryStatus]);

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

import { useEffect } from 'react';
import { getGames } from '../../api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ProductList from '../../components/ProductList';
import EmptyTitle from '../../components/EmptyTitle';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.products);
  const query = useAppSelector((state) => state.filter.query);
  const queryStatus = useAppSelector((state) => state.filter.queryStatus);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(productsActions.setLoading(true));
      try {
        dispatch(productsActions.clear());

        const products = await getGames(query);

        dispatch(productsActions.add(products));
      } catch {
        dispatch(productsActions.setError('Something went wrong'));
      } finally {
        dispatch(productsActions.setLoading(false));
      }
    };

    fetchProducts();
  }, [queryStatus]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyTitle text={error} />;
  }

  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};

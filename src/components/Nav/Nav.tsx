import { NavContainer, FavouriteLink, SearchButton } from './NavStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';
import { actions as pageActions } from '../../features/pageSlice';

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryStatus = useAppSelector((state) => state.filter.queryStatus);

  const handleQueryStatus = () => {
    dispatch(filterActions.queryStatus(!queryStatus));
    dispatch(pageActions.set(1));
  };

  return (
    <NavContainer>
      <SearchButton onClick={handleQueryStatus}>Search</SearchButton>
      <FavouriteLink to="/favourites">Like list</FavouriteLink>
    </NavContainer>
  );
};

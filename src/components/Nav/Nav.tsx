import { NavContainer, FavouriteLink, SearchButton } from './NavStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryStatus = useAppSelector((state) => state.filter.queryStatus);

  const handleQueryStatus = () => {
    dispatch(filterActions.queryStatus(!queryStatus));
  };

  return (
    <NavContainer>
      <SearchButton onClick={handleQueryStatus}>Search</SearchButton>
      <FavouriteLink to="/favourites">Like list</FavouriteLink>
    </NavContainer>
  );
};

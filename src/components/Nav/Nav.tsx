import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { NavContainer, NavigationLink, NavSearch } from './NavStyles';
import { actions as filterActions } from '../../features/filterSlice';

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryStatus = useAppSelector((state) => state.filter.queryStatus);

  const handleQueryStatus = () => {
    dispatch(filterActions.queryStatus(!queryStatus));
  };

  return (
    <NavContainer>
      <NavSearch onClick={handleQueryStatus}>Search</NavSearch>
      <NavigationLink to="/favourites">Like list</NavigationLink>
    </NavContainer>
  );
};

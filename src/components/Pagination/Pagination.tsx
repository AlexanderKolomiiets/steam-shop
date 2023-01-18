// eslint-disable-next-line import/no-extraneous-dependencies
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as pageActions } from '../../features/pageSlice';

export const PaginationNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pages);

  return (
    <>
      <Pagination
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '300px 0 100px',
        }}
        variant="outlined"
        color="primary"
        count={6}
        page={page}
        onChange={(_, num) => dispatch(pageActions.set(num))}
      />
    </>
  );
};

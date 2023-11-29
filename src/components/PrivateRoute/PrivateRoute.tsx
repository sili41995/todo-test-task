import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { PagesPath } from 'constants/pagesPath';
import { IProps } from './PrivateRoute.types';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const path = `/${PagesPath.loginPath}`;

  return shouldRedirect ? (
    <Navigate to={path} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;

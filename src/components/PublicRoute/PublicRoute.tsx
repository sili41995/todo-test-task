import { FC } from 'react';
import { useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toasts } from 'utils';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { PagesPath } from 'constants/pagesPath';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './PublicRoute.types';

export const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
  const isFirstRenderRef = useRef<boolean>(true);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { state } = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = state?.from ?? `/${PagesPath.todosPath}`;
  const isShowWarnToast = state && !isLoggedIn && isFirstRenderRef.current;

  useEffect(() => {
    isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
    isFirstRenderRef.current = false;
  }, [isShowWarnToast]);

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;

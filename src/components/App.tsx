import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import Loader from 'components/Loader';
import { PagesPath } from 'constants/pagesPath';
import { refreshUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const AddTodoForm = lazy(() => import('components/AddTodoForm'));
const TodoDetails = lazy(() => import('components/TodoDetails'));

const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path={PagesPath.homePath} element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={PagesPath.loginPath}
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={PagesPath.registerPath}
            element={<PublicRoute restricted element={<RegisterPage />} />}
          />
          <Route
            path={PagesPath.aboutPath}
            element={<PublicRoute element={<AboutPage />} />}
          />
          <Route
            path={PagesPath.todosPath}
            element={<PrivateRoute element={<TodosPage />} />}
          >
            <Route
              path={`:${PagesPath.dynamicParam}`}
              element={<TodoDetails />}
            />
            <Route path={PagesPath.newTodoPath} element={<AddTodoForm />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;

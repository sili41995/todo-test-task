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
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { toasts } from 'utils';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const AddTodoForm = lazy(() => import('components/AddTodoForm'));
const TodoDetails = lazy(() => import('components/TodoDetails'));

const {
  homePath,
  loginPath,
  registerPath,
  aboutPath,
  todosPath,
  dynamicParam,
  newTodoPath,
} = PagesPath;

const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser())
        .unwrap()
        .then(() => {
          toasts.successToast('Hello, my friend!');
        });
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path={homePath} element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={loginPath}
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={registerPath}
            element={<PublicRoute restricted element={<RegisterPage />} />}
          />
          <Route
            path={aboutPath}
            element={<PublicRoute element={<AboutPage />} />}
          />
          <Route
            path={todosPath}
            element={<PrivateRoute element={<TodosPage />} />}
          >
            <Route path={`:${dynamicParam}`} element={<TodoDetails />} />
            <Route path={newTodoPath} element={<AddTodoForm />} />
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

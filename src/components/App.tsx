import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import { PagesPath } from 'constants/pagesPath';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const AddTodoForm = lazy(() => import('components/AddTodoForm'));
const TodoDetails = lazy(() => import('components/TodoDetails'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PagesPath.homePath} element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          <Route path={PagesPath.loginPath} element={<LoginPage />} />
          <Route path={PagesPath.registerPath} element={<RegisterPage />} />
          <Route path={PagesPath.aboutPath} element={<AboutPage />} />
          <Route path={PagesPath.todosPath} element={<TodosPage />}>
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

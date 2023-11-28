import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TodosList from 'components/TodosList';
import UserProfile from 'components/UserProfile';
import Loader from 'components/Loader';
import { selectIsLoaded } from 'redux/todos/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchTodos } from 'redux/todos/operations';

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(selectIsLoaded);

  useEffect(() => {
    const promise = dispatch(fetchTodos());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <UserProfile />
      {isLoaded && <TodosList />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TodosPage;

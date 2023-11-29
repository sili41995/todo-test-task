import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from 'utils';
import { deleteTodo } from 'redux/todos/operations';
import { useAppDispatch } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';

const useDeleteTodo = () => {
  const [todoId, setTodoId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const path = `/${PagesPath.todosPath + search}`;

  useEffect(() => {
    if (todoId) {
      dispatch(deleteTodo(todoId))
        .unwrap()
        .then(() => {
          navigate(path);
          toasts.successToast('Todo successfully removed');
        })
        .catch((error) => {
          toasts.errorToast(error);
        });
    }
  }, [todoId, dispatch, navigate, path]);

  return setTodoId;
};

export default useDeleteTodo;

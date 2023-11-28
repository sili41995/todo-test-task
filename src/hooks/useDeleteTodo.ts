import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from 'utils';
import { deleteTodo } from 'redux/todos/operations';
import { useAppDispatch } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';

const useDeleteTodo = () => {
  const [TodoId, setTodoId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const path = `/${PagesPath.todosPath + search}`;

  useEffect(() => {
    if (TodoId) {
      dispatch(deleteTodo(TodoId))
        .unwrap()
        .then(() => {
          navigate(path);
          toasts.successToast('Todo successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a Todo failed');
        });
    }
  }, [TodoId, dispatch, navigate, path]);

  return setTodoId;
};

export default useDeleteTodo;

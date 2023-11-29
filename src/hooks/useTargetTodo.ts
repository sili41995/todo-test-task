import { PagesPath } from 'constants/pagesPath';
import { useParams } from 'react-router-dom';
import { selectTodos } from 'redux/todos/selectors';
import { useAppSelector } from './redux';
import { ITodo } from 'types/types';

const useTargetTodo = (): ITodo | undefined => {
  const id = useParams()[PagesPath.dynamicParam];
  const todos: ITodo[] = useAppSelector(selectTodos);
  const targetTodo = todos.find(({ id: todoId }) => String(todoId) === id);

  return targetTodo;
};

export default useTargetTodo;

import { PagesPath } from 'constants/pagesPath';
import { useParams } from 'react-router-dom';
import { selectTodos } from 'redux/todos/selectors';
import { useAppSelector } from './redux';
import { ITodo } from 'types/types';

const useTargetTodo = (): ITodo | {} => {
  const id = useParams()[PagesPath.dynamicParam];
  const Todos: ITodo[] = useAppSelector(selectTodos);
  const targetTodo = Todos.find(({ id: todoId }) => String(todoId) === id);

  return targetTodo ? targetTodo : {};
};

export default useTargetTodo;

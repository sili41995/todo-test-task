import { ITodo } from 'types/types';
import { toasts } from 'utils';

interface IFuncProps {
  todos: ITodo[];
  newTodo: ITodo;
}

const getIsTodo = ({ todos, newTodo }: IFuncProps): boolean => {
  const todoTitle = newTodo.title;
  const isTodo = todos.some(({ title }: ITodo) => title === todoTitle);
  if (isTodo) {
    toasts.warnToast(`This TODO is already in list`);
  }

  return isTodo;
};

export default getIsTodo;

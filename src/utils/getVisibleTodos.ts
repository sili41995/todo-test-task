import { ITodo } from 'types/types';

interface IPops {
  filteredTodos: ITodo[];
  quantity: number;
  currentPage: number;
}

const getVisibleTodos = ({
  filteredTodos,
  quantity,
  currentPage,
}: IPops): ITodo[] => {
  const skip = (currentPage - 1) * quantity;

  return filteredTodos.slice(skip, quantity * currentPage);
};

export default getVisibleTodos;

import { useMemo, FC } from 'react';
import PaginationBar from 'components/PaginationBar';
import TodosList from 'components/TodosList';
import { IProps } from './TodosContainer.types';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { useAppSelector } from 'hooks/redux';
import { useSearchParams } from 'react-router-dom';
import { selectTodos } from 'redux/todos/selectors';
import { filterTodosByTitle, getVisibleTodos, sortTodosByTitle } from 'utils';
import { Container } from './TodosContainer.styled';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;

const TodosContainer: FC<IProps> = ({ quantity, step }) => {
  const todos = useAppSelector(selectTodos);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);

  const filteredTodos = useMemo(() => {
    const sortedTodos = sortTodosByTitle(todos, sortType);
    return filterTodosByTitle(sortedTodos, filter);
  }, [filter, sortType, todos]);

  const visibleTodos = getVisibleTodos({
    filteredTodos,
    quantity,
    currentPage,
  });

  return (
    <Container>
      <TodosList visibleTodos={visibleTodos} />
      <PaginationBar
        quantity={quantity}
        step={step}
        todosQuantity={filteredTodos.length}
      />
    </Container>
  );
};

export default TodosContainer;

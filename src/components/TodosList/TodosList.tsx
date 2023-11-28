import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodosListItem from 'components/TodosListItem';
import DefaultMessage from 'components/DefaultMessage';
import { Container, List } from './TodosList.styled';
import { filterTodosByTitle, getVisibleTodos, sortTodosByTitle } from 'utils';
import { selectTodos } from 'redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { IProps } from './TodosList.types';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;

const TodosList = ({ quantity }: IProps) => {
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
      {!!todos.length ? (
        <List>
          {visibleTodos.map((todo) => (
            <TodosListItem todo={todo} key={todo.id} />
          ))}
        </List>
      ) : (
        <DefaultMessage message='Todo list is empty' />
      )}
    </Container>
  );
};

export default TodosList;

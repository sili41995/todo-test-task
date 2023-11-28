import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodosListItem from 'components/TodosListItem';
import DefaultMessage from 'components/DefaultMessage';
import { Container, List } from './TodosList.styled';
import { filterTodosByTitle, sortTodosByTitle } from 'utils';
import { selectTodos } from 'redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import { SearchParamsKeys } from 'constants/searchParamsKeys';

const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;

const TodosList = () => {
  const todos = useAppSelector(selectTodos);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';

  const filteredTodos = useMemo(() => {
    const sortedTodos = sortTodosByTitle(todos, sortType);
    return filterTodosByTitle(sortedTodos, filter);
  }, [filter, sortType, todos]);

  return (
    <Container>
      {!!todos.length ? (
        <List>
          {filteredTodos.map((todo) => (
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

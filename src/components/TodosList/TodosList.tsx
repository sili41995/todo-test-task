import { FC } from 'react';
import TodosListItem from 'components/TodosListItem';
import DefaultMessage from 'components/DefaultMessage';
import { Container, List } from './TodosList.styled';
import { IProps } from './TodosList.types';

const TodosList: FC<IProps> = ({ visibleTodos, currentPage }) => {
  const isValidPage = currentPage > 0;
  const isShouldRenderList = isValidPage && Boolean(visibleTodos.length);

  return (
    <Container>
      {isShouldRenderList ? (
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

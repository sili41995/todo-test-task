import { SortTypes } from 'constants/sortTypes';
import { ITodo } from 'types/types';

const { DESC_SORT_TYPE } = SortTypes;

const sortTodosByTitle = (todos: ITodo[], sortType: string) => {
  return [...todos].sort(({ title: prevTodo }, { title: nextTodo }) =>
    sortType === DESC_SORT_TYPE
      ? nextTodo.localeCompare(prevTodo)
      : prevTodo.localeCompare(nextTodo)
  );
};

export default sortTodosByTitle;

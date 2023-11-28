import { ITodo } from 'types/types';

const filterTodosByTitle = (todos: ITodo[], filter: string): ITodo[] =>
  filter
    ? todos.filter(({ title }) =>
        title.toLowerCase().startsWith(filter.toLowerCase())
      )
    : todos;

export default filterTodosByTitle;

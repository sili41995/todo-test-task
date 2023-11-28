import { PagesPath } from 'constants/pagesPath';

const isTodosPage = (path: string): boolean =>
  path.includes(PagesPath.todosPath);

export default isTodosPage;

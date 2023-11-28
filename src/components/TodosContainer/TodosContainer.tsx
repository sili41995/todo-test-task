import PaginationBar from 'components/PaginationBar';
import TodosList from 'components/TodosList';
import { IProps } from './TodosContainer.types';

const TodosContainer = (props: IProps) => {
  return (
    <div>
      <PaginationBar {...props} />
      <TodosList {...props} />
    </div>
  );
};

export default TodosContainer;

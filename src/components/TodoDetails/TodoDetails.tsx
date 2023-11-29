import { FC } from 'react';
import EditForm from 'components/EditForm';
import { useTargetTodo } from 'hooks';
import DefaultMessage from 'components/DefaultMessage';

const TodoDetails: FC = () => {
  const targetTodo = useTargetTodo();

  return targetTodo ? (
    <EditForm />
  ) : (
    <DefaultMessage message='Todo is absent' />
  );
};

export default TodoDetails;

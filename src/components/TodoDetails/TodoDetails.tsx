import EditForm from 'components/EditForm';
import { useTargetTodo } from 'hooks';
import DefaultMessage from 'components/DefaultMessage';
import { useLocation } from 'react-router-dom';
import { PagesPath } from 'constants/pagesPath';

const TodoDetails = () => {
  const targetTodo = useTargetTodo();
  const location = useLocation();
  const goBackLink = location.state?.from || PagesPath.homePath;

  return targetTodo ? (
    <EditForm goBackLink={goBackLink} />
  ) : (
    <DefaultMessage message='Todo is absent' />
  );
};

export default TodoDetails;

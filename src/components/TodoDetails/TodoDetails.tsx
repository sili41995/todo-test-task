import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDeleteTodo, useTargetTodo } from 'hooks';
import { useAppSelector } from 'hooks/redux';
import EditForm from 'components/EditForm';
import DefaultMessage from 'components/DefaultMessage';
import IconButton from 'components/IconButton';
import { selectIsLoading } from 'redux/todos/selectors';
import { IconBtnType } from 'constants/iconBtnType';
import { PagesPath } from 'constants/pagesPath';
import { Container } from './TodoDetails.styled';

const TodoDetails: FC = () => {
  const targetTodo = useTargetTodo();
  const isLoading = useAppSelector(selectIsLoading);
  const deleteContact = useDeleteTodo();
  const id = useParams()[PagesPath.dynamicParam];

  const onDelBtnClick = () => {
    deleteContact(Number(id));
  };

  return targetTodo ? (
    <Container>
      <IconButton
        disabled={isLoading}
        btnType={IconBtnType.delete}
        width={44}
        height={35}
        onBtnClick={onDelBtnClick}
      >
        <AiOutlineDelete />
      </IconButton>
      <EditForm />
    </Container>
  ) : (
    <DefaultMessage message='Todo is absent' />
  );
};

export default TodoDetails;

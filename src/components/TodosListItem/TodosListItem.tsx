import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import { Item, Title } from './TodosListItem.styled';
import { selectIsLoading } from 'redux/todos/selectors';
import { useDeleteTodo } from 'hooks';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './TodosListItem.types';
import { IconBtnType } from 'constants/iconBtnType';

const TodosListItem: FC<IProps> = ({ todo }) => {
  const { title, id, completed } = todo;
  const isLoading = useAppSelector(selectIsLoading);
  const deleteTodo = useDeleteTodo();

  const handleDelBtnClick = () => {
    deleteTodo(id);
  };

  return (
    <Item>
      <LinkWithQuery to={`${id}`}>
        <Title completed={completed}>{title}</Title>
      </LinkWithQuery>
      <IconButton
        top={0}
        right={0}
        position='absolute'
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={handleDelBtnClick}
      >
        <AiOutlineDelete />
      </IconButton>
    </Item>
  );
};

export default TodosListItem;

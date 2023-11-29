import { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { SlLogout } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { PagesPath } from 'constants/pagesPath';
import { IconBtnType } from 'constants/iconBtnType';
import { isTodosPage, toasts } from 'utils';
import Filter from 'components/Filter';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectTodos } from 'redux/todos/selectors';
import { logout } from 'redux/auth/authSlice';

const PrivateLinks: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const todos = useAppSelector(selectTodos);
  const path = `/${PagesPath.addNewTodoPath}`;
  const isShouldRenderFilter = isTodosPage(pathname) && Boolean(todos.length);

  const onLogoutBtnClick = () => {
    dispatch(logout());
    toasts.successToast('Goodbye!');
    navigate(PagesPath.homePath);
  };

  return (
    <LinkContainer>
      {isShouldRenderFilter && <Filter />}
      <LinkWithQuery to={path}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Todo
      </LinkWithQuery>
      <IconButton
        btnType={IconBtnType.logout}
        iconSize={28}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <IconContainer>
          <SlLogout />
        </IconContainer>
        Logout
      </IconButton>
    </LinkContainer>
  );
};

export default PrivateLinks;

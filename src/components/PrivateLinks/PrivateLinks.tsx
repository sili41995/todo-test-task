import 'react-toastify/dist/ReactToastify.css';
import { SlLogout } from 'react-icons/sl';
import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { PagesPath } from 'constants/pagesPath';
import { IconBtnType } from 'constants/iconBtnType';

const PrivateLinks = () => {
  const location = useLocation();
  const path = `/${PagesPath.addNewTodoPath}`;

  // const onLogoutBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   makeBlur(e.currentTarget);
  //   dispatch(logoutUser())
  //     .unwrap()
  //     .then(() => {
  //       toasts.successToast('Goodbye!');
  //       navigate(PagesPath.homePath);
  //     })
  //     .catch((error) => {
  //       toasts.errorToast(error);
  //     });
  // };

  return (
    <LinkContainer>
      {/* {isTodosPage(location.pathname) && !!todos.length && <Filter />} */}
      <LinkWithQuery to={path} state={{ from: location }}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Todo
      </LinkWithQuery>
      <IconButton
        btnType={IconBtnType.logout}
        iconSize={28}
        width={44}
        // onBtnClick={onLogoutBtnClick}
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

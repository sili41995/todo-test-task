import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, NavContainer } from './Navigation.styled';
import PublicLinks from 'components/PublicLinks';
import { PagesPath } from 'constants/pagesPath';
import PrivateLinks from 'components/PrivateLinks';
import { useAppSelector } from 'hooks/redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const todosPagePath = `/${PagesPath.todosPath}`;
  const aboutPagePath = `/${PagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={todosPagePath}>Todos</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={aboutPagePath}>About</NavLink>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;

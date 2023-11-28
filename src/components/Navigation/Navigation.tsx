import { NavLink, useLocation } from 'react-router-dom';
import { List, ListItem, NavContainer } from './Navigation.styled';
import PublicLinks from 'components/PublicLinks';
import { PagesPath } from 'constants/pagesPath';
import { isTodosPage } from 'utils';
import PrivateLinks from 'components/PrivateLinks';

const Navigation = () => {
  const { pathname } = useLocation();
  const TodosPagePath = `/${PagesPath.todosPath}`;
  const aboutPagePath = `/${PagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={TodosPagePath}>Todos</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={aboutPagePath}>About</NavLink>
        </ListItem>
      </List>
      {isTodosPage(pathname) ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;

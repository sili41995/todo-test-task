import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import { PagesPath } from 'constants/pagesPath';
import { Messages } from 'constants/messages';

const PublicLinks: FC = () => {
  const registerPagePath = `/${PagesPath.registerPath}`;
  const loginPagePath = `/${PagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={registerPagePath}>{Messages.signUp}</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={loginPagePath}>{Messages.logIn}</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;

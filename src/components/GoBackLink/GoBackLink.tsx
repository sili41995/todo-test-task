import { useLocation } from 'react-router-dom';
import { StyledLink } from './GoBackLink.styled';
import { PagesPath } from 'constants/pagesPath';

const GoBackLink = () => {
  const { search } = useLocation();

  return (
    <StyledLink to={`/${PagesPath.todosPath}${search}`}>Cancel</StyledLink>
  );
};

export default GoBackLink;

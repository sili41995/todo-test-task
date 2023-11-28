import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery = ({ children, to, state }: IProps) => {
  const location = useLocation();
  const path = to + location.search;

  return (
    <Link to={path} state={state}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;

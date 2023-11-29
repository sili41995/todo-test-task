import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery: FC<IProps> = ({ children, to, ...props }) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;

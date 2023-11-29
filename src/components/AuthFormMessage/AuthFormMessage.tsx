import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Message } from './AuthFormMessage.styled';
import { IProps } from './AuthFormMessage.types';

export const AuthFormMessage: FC<IProps> = ({ message, pageLink, action }) => (
  <Message>
    <Link to={pageLink}>{action}</Link>
    {message}
  </Message>
);

export default AuthFormMessage;

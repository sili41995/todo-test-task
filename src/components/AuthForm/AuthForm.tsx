import { FC } from 'react';
import { FormContainer } from './AuthForm.styled';
import { IProps } from './AuthForm.types';

const AuthForm: FC<IProps> = ({ children }) => (
  <FormContainer>{children}</FormContainer>
);

export default AuthForm;

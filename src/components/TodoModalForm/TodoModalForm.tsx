import { FC } from 'react';
import { Container } from './TodoModalForm.styled';
import { IProps } from './TodoModalForm.types';

const TodoModalForm: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default TodoModalForm;

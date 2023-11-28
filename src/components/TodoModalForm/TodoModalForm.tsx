import { Container } from './TodoModalForm.styled';
import { IProps } from './TodoModalForm.types';

const TodoModalForm = ({ children }: IProps) => (
  <Container>{children}</Container>
);

export default TodoModalForm;

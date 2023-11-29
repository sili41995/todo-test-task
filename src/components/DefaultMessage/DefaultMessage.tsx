import { FC } from 'react';
import { Message } from './DefaultMessage.styled';
import { IProps } from './DefaultMessage.types';

const EmptyListMessage: FC<IProps> = ({ message }) => (
  <Message>{message}</Message>
);

export default EmptyListMessage;

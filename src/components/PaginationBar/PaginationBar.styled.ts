import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';
import { setBtnDisplayProp } from 'utils';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;

export const Button = styled.button`
  display: ${({ currentPage, page }: IStyledProps) =>
    setBtnDisplayProp(currentPage as number, page as number)};
`;

export const TemplateButton = styled.button``;

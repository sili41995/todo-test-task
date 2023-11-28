import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';
import { setBtnDisplayProp } from 'utils';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;

export const Button = styled.button`
  display: ${({ currentPage, page, step }: IStyledProps) =>
    setBtnDisplayProp({ currentPage, page, step })};
`;

export const TemplateButton = styled.button``;

export const NavButton = styled.button``;

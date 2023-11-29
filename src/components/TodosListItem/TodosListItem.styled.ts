import styled from '@emotion/styled';
import { IStyledProps } from './TodosListItem.types';

export const Item = styled.li`
  position: relative;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.borderColor};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & a {
    padding: ${({ theme }) => theme.spacing(3)};
    padding-right: ${({ theme }) => theme.spacing(10)};
    display: flex;
    gap: ${({ theme }) => theme.primaryGap}px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export const Title = styled.p`
  text-decoration: ${({ completed }: IStyledProps) =>
    completed ? ' line-through' : 'none'};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.otherFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  &::first-letter {
    text-transform: capitalize;
  }
`;

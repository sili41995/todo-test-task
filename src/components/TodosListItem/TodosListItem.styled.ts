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

export const TodoInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${({ theme }) => theme.primaryGap}px;
  align-items: center;
  & div {
    flex-basis: calc((100% - ${({ theme }) => theme.primaryGap}*2px) / 3);
  }
`;

export const Person = styled.div``;

export const Name = styled.p`
  text-align: center;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.TodoPrimaryTextColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const Phone = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.TodosecondaryTextColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  text-align: center;
`;

import styled from '@emotion/styled';
import { FormType } from 'constants/formType';
import {
  setInputMaxWidth,
  setInputHeight,
  setInputBorderColor,
  setInputFilter,
  setInputBorderRadius,
  setInputPadding,
  setInputFontColor,
  setInputFontSize,
} from 'utils';
import { IStyledProps } from './Input.types';

export const Container = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    display: block;
    width: ${({ fieldIconSize }: IStyledProps) => fieldIconSize}px;
    height: ${({ fieldIconSize }) => fieldIconSize}px;
    color: ${({ theme }) => theme.colors.greyColor};
  }
`;

export const StyledInput = styled.input`
  flex-shrink: 0;
  width: 100%;
  max-width: ${({ inputType }: IStyledProps) => setInputMaxWidth(inputType)};
  height: ${({ inputType }) => setInputHeight(inputType)};
  background-color: transparent;
  border: 1px solid ${({ inputType }) => setInputBorderColor(inputType)};
  filter: ${({ inputType }) => setInputFilter(inputType)};
  border-radius: ${({ inputType }) => setInputBorderRadius(inputType)}px;
  padding: ${({ inputType }) => setInputPadding(inputType)};
  font-family: Inter;
  color: ${({ inputType }) => setInputFontColor(inputType)};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ inputType }) => setInputFontSize(inputType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme, inputType }) =>
      inputType === FormType.filter ? false : theme.colors.primaryColor};
  }
  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Label = styled.label`
  display: flex;
  & svg {
    width: ${({ inputType }: IStyledProps) => setInputHeight(inputType)};
    height: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border: 1px solid;
    border-color: ${({ inputType, checked }) =>
      checked ? 'transparent' : setInputBorderColor(inputType)};
    border-radius: ${({ inputType }) => setInputBorderRadius(inputType)}px;
    background-color: ${({ theme, checked }) =>
      checked ? theme.colors.otherColor : 'transparent'};
    color: ${({ theme, checked }) =>
      checked ? theme.colors.whiteColor : 'transparent'};
    cursor: pointer;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc},
      border-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }
  & .isHidden {
    position: fixed;
    transform: scale(0);
  }
`;

import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};

  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  & a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.primaryColor};
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

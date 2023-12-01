import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
  & button {
    align-self: flex-end;
  }
`;

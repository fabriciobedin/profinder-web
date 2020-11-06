import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background-light-1);
  border-radius: 10px;
  border: 2px solid var(--color-background-light-1);
  padding: 16px;
  color: var(--color-background-light-3);
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-secundary);

    &::placeholder {
      color: var(--color-background-light-3);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

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

import styled from 'styled-components';

export const Container = styled.div`
  background: #2e1f1f;
  border-radius: 10px;
  border: 2px solid #2e1f1f;
  padding: 16px;
  color: #645959;
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
    color: #fff;
    &::placeholder {
      color: #645959;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

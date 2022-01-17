import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;

  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  padding: 20px;

  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  background-color: ${(props) => props.theme.mainInputBg};

  font-size: 0.875rem;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    & {
      width: calc(100% - 45px);
    }
  }
`;

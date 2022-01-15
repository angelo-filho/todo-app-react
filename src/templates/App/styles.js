import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.background};

  transition: background 0.2s;
`;

export const Container = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  width: min(500px, 90%);
  height: 600px;
  padding: 30px 25px;

  background-color: ${(props) => props.theme.containerColor};
  border-radius: 10px;

  overflow-x: hidden;

  transition: background 0.2s;
`;

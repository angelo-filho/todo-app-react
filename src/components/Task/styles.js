import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: 40px;

  display: flex;

  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 100%;
  padding: 20px;

  background-color: ${(props) => props.theme.taskColor};
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  color: ${(props) => props.theme.taskFontColor};
  font-size: 0.875rem;
  font-weight: 400;

  cursor: pointer;
  transition: background 0.2s;

  :focus {
    background-color: #fff;
    color: ${(props) => props.theme.taskFocusedFontColor};
    cursor: text;
  }
`;

export const FakeInput = styled.div`
  position: absolute;
  right: 10%;

  width: 10%;
  height: 100%;

  background-color: ${(props) => props.background};
  z-index: 1000;

  transition: background 0.2s;

  :hover {
    cursor: pointer;
  }
`;

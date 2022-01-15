import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-bottom: 1rem;
`;

export const Button = styled(motion.button)`
  position: relative;

  display: flex;
  align-items: center;

  width: 50px;
  height: 25px;
  padding: 0 2px;

  background-color: ${(props) => props.theme.slideButtonColor};
  border: none;
  border-radius: 100px;

  :hover {
    cursor: pointer;
  }
`;

export const Circle = styled(motion.div)`
  position: absolute;

  width: 23px;
  height: 23px;

  background-color: ${(props) => props.theme.slideButtonCircleColor};
  border-radius: 50%;

  z-index: 1000;
`;

export const Emoji = styled.span`
  position: absolute;

  ${(props) =>
    props.right
      ? css`
          right: 4px;
        `
      : css`
          left: 4px;
        `}
`;

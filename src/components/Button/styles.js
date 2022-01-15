import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;

  background-color: ${(props) => props.background};
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  overflow: hidden;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.93);
  }

  ${StyledIconBase} {
    color: #fff;
    width: 22px;
  }

  ${(props) => {
    return (
      props.$notRounded &&
      css`
        border-radius: 0px;

        ${props.$disabled &&
        css`
          background-color: ${(props) => props.theme.taskColor};

          svg {
            display: none;
          }

          &:hover {
            filter: none;
          }
        `}
      `
    );
  }}
`;

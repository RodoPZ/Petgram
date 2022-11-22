import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      ${fadeIn({ time: "0.5s" })}
      background: white;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 30px;
      margin: 0 auto;
      max-width: 500px;
      padding: 5px;
      position: fixed;
      right: 0px;
      top: 0px;
      transform: scale(0.7);
      z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;

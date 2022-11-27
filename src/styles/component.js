import styled, { keyframes } from "styled-components";

const SpinnerKeyFrames = keyframes`
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  `;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border-left-color: #09f;
  margin: auto;
  animation: ${SpinnerKeyFrames} 1s ease infinite;
`;

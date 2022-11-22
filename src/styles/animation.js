import { keyframes, css } from "styled-components";

const fadeInKeyFrames = keyframes`
  from{
    filter: blur(5px);
    opacity:0;
  }
  to{
    filter:blur(0);
    opacity:1;
  }
`;
const LoadingKeyFrames = keyframes`
  0%{
    background-color:#e6e6e6;
  }
  50%{
    background-color: white;
  }
  100%{
    background-color: #e6e6e6;
  }
`;

export const lazyLoading = () => css`
  animation: 1s infinite ${LoadingKeyFrames} ease-in;
`;
export const fadeIn = ({ time = "1s", type = "ease" } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`;

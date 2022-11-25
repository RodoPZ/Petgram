import styled from "styled-components";
import { lazyLoading } from "../../styles/animation";

export const LoadingRectangle = styled.div`
  width: 460px;
  height: 260px;
  ${lazyLoading()}
  margin-top: 20px;
`;

export const LoadingCircle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  ${lazyLoading()}
  margin-top: 20px;
`;

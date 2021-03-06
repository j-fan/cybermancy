import React from "react";
import styled from "styled-components";
import { gradient45deg } from "../globalStyles";

const StyledVideoOverlay = styled.div`
  z-index: 1;
  background: ${gradient45deg};
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 25%;
`;

const VideoOverlay = () => {
  return <StyledVideoOverlay />;
};

export { VideoOverlay };

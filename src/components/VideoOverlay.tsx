import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { gradient45deg } from "../globalStyles";

const StyledVideoOverlay = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  background: ${gradient45deg};
  width: 100%;
  height: 100%;
  opacity: 25%;
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  background: url("./images/scanlines.png");
  width: 100%;
  height: 100%;
`;

const VideoOverlay: FunctionComponent = () => {
  return (
    <StyledVideoOverlay>
      <GradientOverlay />
      <Scanlines />
    </StyledVideoOverlay>
  );
};

export { VideoOverlay };

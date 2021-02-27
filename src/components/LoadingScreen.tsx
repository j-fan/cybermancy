import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import { colours } from "../globalStyles";
import { LoadingScreenContent } from "./LoadingScreenContent";
import { DividerPosition, ScrollDirection, ScrollText } from "./ScrollText";

const LoadingScreenContainer = styled.div<{
  showLoading: boolean;
  isFaceDetectReady: boolean;
}>`
  z-index: 3;
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: background-color ease 1s, opacity ease 1s, visibility ease 0s 1s;
  background-color: ${({ showLoading }) =>
    showLoading ? colours.black : "rgba(0,0,0,0)"};

  ${({ isFaceDetectReady, showLoading }) =>
    isFaceDetectReady && !showLoading
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
          visibility: visible;
        `};
`;

type LoadingScreenProps = {
  isFaceDetectReady: boolean;
};

const LoadingScreen: FunctionComponent<LoadingScreenProps> = ({
  isFaceDetectReady,
}) => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <LoadingScreenContainer
      showLoading={showLoading}
      isFaceDetectReady={isFaceDetectReady}
    >
      <ScrollText
        direction={ScrollDirection.RIGHT}
        text="Cybermancy-2-"
        dividerPosition={DividerPosition.TOP}
        isVisible={showLoading}

      />
      <LoadingScreenContent
        isFaceDetectReady={isFaceDetectReady}
        setShowLoading={setShowLoading}
        showLoading={showLoading}
      />
      <ScrollText
        direction={ScrollDirection.LEFT}
        text="Cybermancy-2-"
        dividerPosition={DividerPosition.BOTTOM}
        isVisible={showLoading}
      />
    </LoadingScreenContainer>
  );
};

export { LoadingScreen };

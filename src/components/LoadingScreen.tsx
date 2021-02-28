import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import { colours } from "../globalStyles";
import { LoadingScreenContent } from "./LoadingScreenContent";
import { DividerPosition, ScrollDirection, ScrollText } from "./ScrollText";

const LoadingScreenContainer = styled.div<{
  showLoading: boolean;
  isFaceDetectReady: boolean;
}>`
  z-index: 2;
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
          pointer-events: none;
        `
      : css`
          pointer-events: all;
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
        text="Cybermancy"
        dividerPosition={DividerPosition.TOP}

      />
      <LoadingScreenContent
        isFaceDetectReady={isFaceDetectReady}
        setShowLoading={setShowLoading}
        showLoading={showLoading}
      />
      <ScrollText
        direction={ScrollDirection.LEFT}
        text="Cybermancy"
        dividerPosition={DividerPosition.BOTTOM}
      />
    </LoadingScreenContainer>
  );
};

export { LoadingScreen };

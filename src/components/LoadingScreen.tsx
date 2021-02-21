import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { colours } from "../globalStyles";
import { Button } from "./Button";
import { DividerPosition, ScrollDirection, ScrollText } from "./ScrollText";

const LoadingScreenContainer = styled.div<{ showLoading: boolean }>`
  z-index: 3;
  position: absolute;
  width: 100%;
  top: 0;
  height: calc(100% - 2px);
  background-color: ${colours.black};
  color: ${colours.white};
  visibility: ${({ showLoading }) => (showLoading ? "visible" : "hidden")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type LoadingScreenProps = {
  isFaceDetectReady: boolean;
};

const LoadingScreen: FunctionComponent<LoadingScreenProps> = ({
  isFaceDetectReady,
}) => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <LoadingScreenContainer showLoading={showLoading}>
      <ScrollText
        direction={ScrollDirection.RIGHT}
        text="Cybermancy-2-"
        dividerPosition={DividerPosition.TOP}
      />
      <LoadingScreenContent
        isFaceDetectReady={isFaceDetectReady}
        setShowLoading={setShowLoading}
      />
      <ScrollText
        direction={ScrollDirection.LEFT}
        text="Cybermancy-2-"
        dividerPosition={DividerPosition.BOTTOM}
      />
    </LoadingScreenContainer>
  );
};

const LoadingScreenContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  max-width: 700px;
`;

type LoadingScreenContentProps = {
  setShowLoading: (isLoading: boolean) => void;
} & LoadingScreenProps;

const LoadingScreenContent: FunctionComponent<LoadingScreenContentProps> = ({
  isFaceDetectReady,
  setShowLoading,
}) => {
  return (
    <LoadingScreenContentWrapper>
      {isFaceDetectReady ? (
        <Button onClick={() => setShowLoading(false)}>Enter</Button>
      ) : (
        <Button onClick={() => setShowLoading(false)}>Loading</Button>
      )}
    </LoadingScreenContentWrapper>
  );
};

export { LoadingScreen };

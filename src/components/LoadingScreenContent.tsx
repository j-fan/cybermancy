import React, { FunctionComponent } from "react";
import styled, { keyframes, css } from "styled-components";
import { colours, Unica, BodyText, gradientBorderStyle } from "../globalStyles";
import { Button } from "./Button";

const LoadingScreenContentWrapper = styled.div<{ showLoading: boolean }>`
  color: ${colours.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 700px;

  ${({ showLoading }) =>
    !showLoading &&
    css`
      height: 100%;
    `};
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const MessageBox = styled.div`
  ${gradientBorderStyle};
  padding: 20px;
  text-align: center;
  justify-self: start;
`;

const LoadingText = styled.span`
  ${Unica}
  font-size: 2em;
  color: ${colours.pink};
  animation: ${fadeInOut} 1s linear infinite;
`;

type LoadingScreenContentProps = {
  isFaceDetectReady: boolean;
  showLoading: boolean;
  setShowLoading: (isLoading: boolean) => void;
};

const LoadingScreenContent: FunctionComponent<LoadingScreenContentProps> = ({
  isFaceDetectReady,
  setShowLoading,
  showLoading,
}) => {
  const renderAnalysingFaceMessage = () => {
    if (!isFaceDetectReady) {
      return (
        <>
          <MessageBox>
            <p>Please ensure that your face is in view and well lit</p>
            <LoadingText>Anaylsing face...</LoadingText>
          </MessageBox>
        </>
      );
    }
    return null;
  };

  return (
    <LoadingScreenContentWrapper showLoading={showLoading}>
      {showLoading ? (
        <>
          <BodyText>Welcome text goes here</BodyText>
          <Button onClick={() => setShowLoading(false)}>Enter</Button>
        </>
      ) : (
        renderAnalysingFaceMessage()
      )}
    </LoadingScreenContentWrapper>
  );
};

export { LoadingScreenContent };

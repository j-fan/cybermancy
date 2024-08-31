import { ResizeObserver } from "@juggle/resize-observer";
import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import useMeasure from "react-use-measure";
import styled, { keyframes, css } from "styled-components";
import { colours, Unica, BodyText, gradientBorderStyle } from "../globalStyles";
import { Button } from "./Button";
import { useModal } from "./ModalContext";

const LoadingScreenContentWrapper = styled("div")<{ showLoading: boolean }>`
  color: ${colours.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  background-image: url("./images/bagua.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${({ showLoading }) =>
    !showLoading &&
    css`
      height: 100%;
      background-image: none;
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
  color: ${colours.purple};
  animation: ${fadeInOut} 1s linear infinite;
`;

const StyledBodyText = styled(BodyText)<PropsWithChildren<{ width: number }>>`
  ${({ width }) =>
    css`
      width: calc(${width}px * 0.5);
    `};
  text-align: center;
`;

const IntroductionText =
  "Cybermancy 2 is an interactive webcam experience based on the concept of Chinese face reading.";

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
  const [ref, { height, width }] = useMeasure({
    polyfill: ResizeObserver,
  });

  const { updateModal, isOpen: modalIsOpen } = useModal();

  useEffect(() => {
    if (isFaceDetectReady && !modalIsOpen && !showLoading) {
      updateModal?.({
        title: "Instructions",
        description:
          "Your face reading is ready! Click on the 3D objects to get a reading about a life theme that corresponds to that region of the face.\n\nRefresh the website if you want to try the interaction with another person.",
        imageUrl: "./images/info.png",
        isOpen: true,
      });
    }
  }, [isFaceDetectReady, showLoading]);

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
    <LoadingScreenContentWrapper showLoading={showLoading} ref={ref}>
      {showLoading ? (
        <>
          <StyledBodyText width={height < width ? height : width}>
            {IntroductionText}
          </StyledBodyText>
          <Button onClick={() => setShowLoading(false)}>Enter</Button>
        </>
      ) : (
        renderAnalysingFaceMessage()
      )}
    </LoadingScreenContentWrapper>
  );
};

export { LoadingScreenContent };

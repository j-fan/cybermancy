import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { colours } from "../globalStyles";
import { ScrollDirection, ScrollText } from "./ScrollText";

const LoadingScreenContainer = styled.div<{ showLoading: boolean }>`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colours.black};
  color: ${colours.white};
  visibility: ${({ showLoading }) => (showLoading ? "visible" : "hidden")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainImage = styled.div``;

const Button = styled.div``;

type LoadingScreenProps = {
  isFaceDetectReady: boolean;
};

const LoadingScreen: FunctionComponent<LoadingScreenProps> = ({
  isFaceDetectReady,
}) => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <LoadingScreenContainer showLoading={showLoading}>
      <ScrollText direction={ScrollDirection.RIGHT} text="Cybermancy-2-" />
      <div>
        <MainImage />
        {isFaceDetectReady ? (
          <Button onClick={() => setShowLoading(false)}>Enter</Button>
        ) : (
          "Loading"
        )}
      </div>
      <ScrollText direction={ScrollDirection.LEFT} text="Cybermancy-2-" />
    </LoadingScreenContainer>
  );
};

export { LoadingScreen };

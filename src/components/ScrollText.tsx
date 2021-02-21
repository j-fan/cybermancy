import { ResizeObserver } from "@juggle/resize-observer";
import React, { FunctionComponent } from "react";
import useMeasure from "react-use-measure";
import styled, { keyframes, css } from "styled-components";
import {
  colours,
  Unica,
  device,
  gradientSeamless,
  gradient90deg,
  borderWidth,
} from "../globalStyles";

const getAnimation = (direction: ScrollDirection, width: number) => {
  if (direction === ScrollDirection.LEFT) {
    return keyframes`
        0% {
          transform: translateX(${-width}px);
        }
        100% {
          transform: translateX(0px);
        }
      `;
  } else {
    return keyframes`
        0% {
          transform: translateX(0px);
        }
        100% {
          transform: translateX(${-width}px);
        }
      `;
  }
};

const ScrollTextStyle = styled.span<{
  direction: ScrollDirection;
  width: number;
}>`
  ${Unica}
  font-size: 4em;
  white-space: nowrap;
  background: ${gradientSeamless};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  color: ${colours.black};

  ${({ direction, width }) =>
    css`
      animation: ${getAnimation(direction, width)} 10s linear infinite;
    `};

  @media ${device.mobileL} {
    font-size: 6em;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const AlignStartWrapper = styled.div`
  align-self: start;
`;

enum ScrollDirection {
  LEFT = "left",
  RIGHT = "right",
}

enum DividerPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

const Divider = styled.div`
  height: ${borderWidth};
  background: ${gradient90deg};
  width: 100%;
`;

type ScrollTextProps = {
  direction: ScrollDirection;
  text: string;
  dividerPosition: DividerPosition;
};

const ScrollText: FunctionComponent<ScrollTextProps> = ({
  direction,
  text,
  dividerPosition,
}) => {
  const [ref, { width }] = useMeasure({
    polyfill: ResizeObserver,
  });

  let repeatedText = "";
  Array.from(Array(3)).forEach((_) => {
    repeatedText = repeatedText + text;
  });

  return (
    <AlignStartWrapper>
      {dividerPosition === DividerPosition.TOP && <Divider />}
      <FlexWrapper>
        <ScrollTextStyle direction={direction} ref={ref} width={width}>
          {repeatedText}
        </ScrollTextStyle>
        <ScrollTextStyle direction={direction} width={width}>
          {repeatedText}
        </ScrollTextStyle>
      </FlexWrapper>
      {dividerPosition === DividerPosition.BOTTOM && <Divider />}
    </AlignStartWrapper>
  );
};

export { ScrollText, ScrollDirection, DividerPosition };

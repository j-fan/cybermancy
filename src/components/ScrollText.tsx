import { ResizeObserver } from "@juggle/resize-observer";
import React, { FunctionComponent } from "react";
import useMeasure from "react-use-measure";
import styled, { keyframes, css } from "styled-components";
import { colours, Unica, device, gradientSeamless } from "../globalStyles";

const getAnimation = (
  direction: ScrollDirection,
  isOffsetted: boolean,
  width: number
) => {
  if (direction === ScrollDirection.LEFT) {
    if (isOffsetted) {
      return keyframes`
        0% {
          transform: translateX(0px);
        }
        100% {
          transform: translateX(${width}px);
        }
      `;
    } else {
      return keyframes`
        0% {
          transform: translateX(${-width}px);
        }
        100% {
          transform: translateX(0px);
        }
      `;
    }
  } else {
    if (isOffsetted) {
      return keyframes`
        0% {
          transform: translateX(${width}px);
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
  }
};

const ScrollTextStyle = styled.span<{
  direction: ScrollDirection;
  isOffsetted: boolean;
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

  ${({ direction, isOffsetted, width }) =>
    css`
      animation: ${getAnimation(direction, isOffsetted, width)} 10s linear
        infinite;
    `};

  @media ${device.mobileL} {
    font-size: 8em;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Divider = styled.div`
  height: 2px;
  background: ${gradientSeamless};
  width: 100%;
`;

enum ScrollDirection {
  LEFT = "left",
  RIGHT = "right",
}

type ScrollTextProps = {
  direction: ScrollDirection;
  text: string;
};

const ScrollText: FunctionComponent<ScrollTextProps> = ({
  direction,
  text,
}) => {
  const [ref, { width }] = useMeasure({
    polyfill: ResizeObserver,
  });

  let repeatedText = "";
  Array.from(Array(3)).forEach((_) => {
    repeatedText = repeatedText + text;
  });

  return (
    <Wrapper>
      <ScrollTextStyle
        direction={direction}
        isOffsetted={false}
        ref={ref}
        width={width}
      >
        {repeatedText}
      </ScrollTextStyle>
      <ScrollTextStyle direction={direction} isOffsetted={false} width={width}>
        {repeatedText}
      </ScrollTextStyle>
      {/* <Divider /> */}
    </Wrapper>
  );
};

export { ScrollText, ScrollDirection };

import { ResizeObserver } from "@juggle/resize-observer";
import React, { FunctionComponent, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import styled, { keyframes, css } from "styled-components";
import { colours, Unica, gradientSeamless } from "../globalStyles";

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

const ScrollTextStyle = styled("span")<{
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
  user-select: none;
  will-change: transform;

  ${({ direction, width }) =>
    css`
      animation: ${getAnimation(direction, width)} 30s linear infinite;
    `};
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
  const [textWithTrigrams, setTextWithTrigrams] = useState("");

  useEffect(() => {
    let repeatedText = "";
    Array.from(Array(6)).forEach(() => {
      repeatedText = repeatedText + "-" + text;
    });
    setTextWithTrigrams(repeatedText);
  }, []);

  return (
    <AlignStartWrapper>
      <FlexWrapper>
        <ScrollTextStyle direction={direction} ref={ref} width={width}>
          {textWithTrigrams}
        </ScrollTextStyle>
        <ScrollTextStyle direction={direction} width={width}>
          {textWithTrigrams}
        </ScrollTextStyle>
      </FlexWrapper>
    </AlignStartWrapper>
  );
};

export { ScrollText, ScrollDirection };

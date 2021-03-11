import { ResizeObserver } from "@juggle/resize-observer";
import React, { FunctionComponent, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useMeasure from "react-use-measure";
import styled, { css } from "styled-components";
import {
  colours,
  device,
  dropShadow,
  gradientBorderStyle,
  IconText,
  Title1,
  borderWidth,
} from "../globalStyles";
import { useModal } from "./ModalContext";

export type ModalProps = {
  title?: string;
  description?: React.ReactNode;
  isOpen?: boolean;
  key?: string;
  imageUrl?: string;
};

const ModalBackground = styled.div<{ isOpen?: boolean }>`
  z-index: 4;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: grid;
  place-items: center;

  ${({ isOpen }) =>
    isOpen
      ? css`
          pointer-events: all;
        `
      : css`
          pointer-events: none;
        `}
`;

const ModalContainer = styled.div<{ isOpen?: boolean; isAutoHeight: boolean }>`
  width: calc(100% - 40px);
  color: ${colours.white};
  white-space: break-spaces;
  padding: 20px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          visibility: visible;
          margin-top: 0;
          transition: margin-top ease 0.3s, visibility ease 0s;
        `
      : css`
          visibility: hidden;
          margin-top: -40px;
          transition: margin-top ease 0.3s 0s, visibility ease 0s 0.3s;
        `}
  ${gradientBorderStyle};

  @media ${device.tablet} {
    width: 600px;
  }

  @media ${device.desktop} {
    width: 800px;
  }

  ${({ isAutoHeight }) =>
    isAutoHeight
      ? css`
          max-height: 400px;
        `
      : css`
          height: 450px;
          @media ${device.tablet} {
            height: 500px;
          }

          @media ${device.desktop} {
            height: 600px;
          }
        `}
`;

const ExitButtonStyle = styled.div`
  color: ${colours.teal};
  background-color: ${colours.black};
  width: 40px;
  height: 40px;
  position: absolute;
  top: -16px;
  right: -16px;
  font-size: 36px;
  border: ${colours.teal} solid ${borderWidth};
  border-radius: 50%;
  line-height: 37px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  ${dropShadow}
  transition: transform ease 0.05s;

  &:active {
    transform: scale(1.2);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;

  @media ${device.mobileL} {
    height: 200px;
  }
`;

const StyledTitle = styled(Title1)<{ hasTopMargin: boolean }>`
  text-align: center;
  ${({ hasTopMargin }) =>
    !hasTopMargin &&
    css`
      margin-top: 0;
    `}
`;

const ScrollWrapper = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge hide scrollbar */
  scrollbar-width: none; /* Firefox hide scrollbar */

  @media ${device.tablet} {
    padding: 0px 40px 20px;
  }

  ::-webkit-scrollbar {
    display: none; /* Chrome hide scrollbar */
  }
`;

const ExitButton: FunctionComponent<{
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ onClick }) => (
  <ExitButtonStyle onClick={onClick}>
    <IconText>×</IconText>
  </ExitButtonStyle>
);

const Modal: FunctionComponent = () => {
  const { title, description, closeModal, isOpen, imageUrl } = useModal();
  const [setUseMeasureRef, { height }] = useMeasure({
    polyfill: ResizeObserver,
  });
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      scrollWrapperRef.current?.scrollTo({ top: 0 });
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <ModalBackground onClick={() => closeModal?.()} isOpen={isOpen}>
      <ModalContainer
        isAutoHeight={height < 400}
        isOpen={isOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ExitButton onClick={() => closeModal?.()} />
        <ScrollWrapper
          ref={(ref) => {
            setUseMeasureRef(ref);
            scrollWrapperRef.current = ref;
          }}
        >
          {imageUrl && <StyledImage src={imageUrl} />}
          <StyledTitle hasTopMargin={!!imageUrl}>{title}</StyledTitle>
          {description}
        </ScrollWrapper>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export { Modal };

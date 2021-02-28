import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import {
  BodyText,
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
  z-index: 2;
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

const ModalContainer = styled.div<{ isOpen?: boolean }>`
  width: calc(100% - 40px);
  min-height: 400px;
  color: ${colours.white};
  padding: 20px;
  white-space: break-spaces;
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
    min-height: 300px;
    width: 600px;
  }

  @media ${device.desktop} {
    min-height: 400px;
    width: 800px;
  }
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

const StyledTitle = styled(Title1)<{hasTopMargin : boolean}>`
  text-align: center;
  ${({ hasTopMargin }) =>
    !hasTopMargin
      &&
      css`
          margin-top: 0;
        `}
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

  return ReactDOM.createPortal(
    <ModalBackground onClick={() => closeModal?.()} isOpen={isOpen}>
      <ModalContainer
        isOpen={isOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ExitButton onClick={() => closeModal?.()} />
        {imageUrl && <StyledImage src={imageUrl}/>}
        <StyledTitle hasTopMargin={!!imageUrl}>{title}</StyledTitle>
        <BodyText>{description}</BodyText>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export { Modal };

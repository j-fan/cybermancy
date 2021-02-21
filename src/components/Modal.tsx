import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import {
  BodyText,
  colours,
  device,
  dropShadow,
  gradient45deg,
  IconText,
  Title1,
} from "../globalStyles";
import { useModal } from "./ModalContext";

export type ModalProps = {
  title?: string;
  description?: React.ReactNode;
  isOpen?: boolean;
  key?: string;
};

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: grid;
  place-items: center;
`;

const borderWidth = "3px";

const ModalContainer = styled.div<{ isOpen?: boolean }>`
  background-color: ${colours.black};
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

  border-radius: 1em;
  box-sizing: border-box;
  background-clip: padding-box;
  border: solid ${borderWidth} transparent;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -${borderWidth};
    border-radius: inherit;
    background: ${gradient45deg};
    ${dropShadow}
  }

  @media ${device.mobileL} {
    min-height: 300px;
    width: 400px;
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
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  ${dropShadow}
  transition: transform ease 0.05s;

  &:active {
    transform: scale(1.2);
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
  const { title, description, closeModal, isOpen } = useModal();

  return ReactDOM.createPortal(
    <ModalBackground onClick={() => closeModal?.()}>
      <ModalContainer
        isOpen={isOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ExitButton onClick={() => closeModal?.()} />
        <Title1>{title}</Title1>
        <BodyText>{description}</BodyText>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export { Modal };

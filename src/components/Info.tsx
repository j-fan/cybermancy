import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colours, IconText, textShadow } from "../globalStyles";
import { useModal } from "./ModalContext";

const IconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: ${colours.teal};
  font-size: 24px;
  cursor: pointer;
  padding: 20px;
  z-index: 3;
  transition: transform ease 0.05s;
  ${textShadow}

  &:hover {
    transform: scale(1.2);
  }
`;

const Info: FunctionComponent = () => {
  const { updateModal } = useModal();
  return (
    <IconContainer
      onClick={() =>
        updateModal?.({
          isOpen: true,
          title: "Info modal",
          description: "Description description",
        })
      }
    >
      <IconText>ⓘ</IconText>
    </IconContainer>
  );
};

export { Info };

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colours, IconText, textShadow, device } from "../globalStyles";
import { useModal } from "./ModalContext";

const IconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: ${colours.teal};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  z-index: 5;
  transition: transform ease 0.05s;
  ${textShadow}

  &:hover {
    transform: scale(1.2);
  }

  @media ${device.mobileL} {
    font-size: 2rem;
    padding: 20px;
  }
`;

const IconBackground = styled.div`
  background: ${colours.black};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
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
          imageUrl: "./images/info.png",
        })
      }
    >
      <IconBackground>
        <IconText>ⓘ</IconText>
      </IconBackground>
    </IconContainer>
  );
};

export { Info };

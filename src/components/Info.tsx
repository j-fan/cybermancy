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

const InfoModalContent: FunctionComponent = () => (
  <div>
    <h2>About the artwork</h2>
    <p>
      Cybermancy 2 is an interactive webcam experience based on Chinese face
      reading, an ancient fortune telling practice that predicts a person&apos;s
      personality and luck based on their facial features. This work is a
      continuation of{" "}
      <a href="https://j-fan.github.io/cybermancy2/">Cybermancy</a>, which is a
      palm reading experience which presents the user with targeted
      advertisements and content based on their estimated demographic.
    </p>
    <p>
      Chinese face reading has had lasting impacts on the standards of beauty
      and gender roles in East Asian society. For example, features such as
      small, full lips which are desirable by women, usually correspond to
      positive face readings. In this case, large lips in women indicate that
      they are prone to gossip and spilling secrets, so the opposite is
      preferred.
    </p>
    <p>
      Underneath this non-scientific exterior, analysis is done by AI known as
      neural networks. The AI generates facial landmarks and predicts age and
      gender. With this data, the user is presented with generalised information
      that might fit this demographic, not unlike what advertising tries to do
      with analytics.
    </p>
    <p>
      Cybermancy is a demonstration modern problem wrapped in the guise of an
      ancient practice. It is hard to say whether we are being successfully read
      by others or we are conforming to the predictions presented to us.
    </p>
    <h2>About the artist</h2>
    <p>
      Jane Fan is a software engineer and digital artist based in Sydney,
      Australia. Her works span a variety of mediums including illustration, 3D
      computer graphics, generative and interactive art. She employs web and
      game technologies to create her works, assisted by webcams, 3D cameras and
      microphones if they are interactive. Her artworks tend to have cyberpunk
      and algorithmic aesthetics, concerned with current and future implications
      of emerging technologies. Find out more on her{" "}
      <a href="https://www.janefan.xyz/">portfolio website.</a>
    </p>
  </div>
);

const Info: FunctionComponent = () => {
  const { updateModal } = useModal();
  return (
    <IconContainer
      onClick={() =>
        updateModal?.({
          isOpen: true,
          title: "About",
          description: <InfoModalContent />,
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

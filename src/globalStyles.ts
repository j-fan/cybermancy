import styled, { createGlobalStyle, css } from "styled-components";

export const colours = {
  black: "#222",
  white: "#FFF",
  pink: "#ff256f",
  purple: "#c21dfd",
  teal: "#45fce7",
};

const Unica = css`
  font-family: "Unica One", cursive;
`;

const OpenSans = css`
  font-family: "Open Sans", Sans-Serif;
`;

const Title1 = styled.h1`
  ${Unica}
  font-size: 2em;
`;

const Title2 = styled.h1`
  ${Unica}
  font-size: 1.5em;
`;

const Title3 = styled.h1`
  ${Unica}
  font-size: 1.25em;
`;

const IconText = styled.span`
  ${OpenSans}
`;

const BodyText = styled.p`
  ${OpenSans}
  font-size: 1em;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${colours.black};
    overflow: hidden;
    ${OpenSans}
  }
`;

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const dropShadow = css`
  box-shadow: 0px 0px 8px 0px #000;
`;
const textShadow = css`
  text-shadow: 0 0 8px #000;
`;

export {
  GlobalStyle,
  dropShadow,
  textShadow,
  Title1,
  Title2,
  Title3,
  IconText,
  BodyText,
};

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { gradientBorderStyle, OpenSans, colours, device } from "../globalStyles";

const ButtonStyle = styled("div")`
  ${gradientBorderStyle};
  padding: 8px 16px;
  ${OpenSans}
  border-radius: 1.5em;
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  align-self: center;

  @media ${device.mobileL} {
    font-size: 1.5em;
  }

  &:hover {
    background: transparent;
    color: ${colours.black};
  }
`;

type ButtonProps = {
  onClick: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export { Button };

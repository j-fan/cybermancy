import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { gradientBorderStyle, OpenSans, colours } from "../globalStyles";

const ButtonStyle = styled.div`
  ${gradientBorderStyle};
  padding: 8px 16px;
  border-radius: 2em;
  ${OpenSans}
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  align-self: center;

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

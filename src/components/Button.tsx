import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { gradientBorderStyle, OpenSans, colours } from "../globalStyles";

const ButtonStyle = styled.div`
  ${gradientBorderStyle};
  padding: 8px 16px;
  border-radius: 1.5em;
  ${OpenSans}
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;

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

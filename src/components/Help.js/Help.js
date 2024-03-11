import React from "react";
import styled, { css } from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";

const Help = () => {
  return <HelpElement>Help</HelpElement>;
};

const HelpElement = styled.a`
  color: ${COLORS.gray[300]};
  font-size: ${14 / 16}rem;
  font-family: ${FONTS.raleway};
  margin: 12px 24px;
  weight: ${WEIGHTS.normal};
`;

export default Help;

import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";

const links = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Traning & Gym",
  "Football",
  "Skateboarding",
  "American Football",
  "Baseball",
  "Golf",
  "Tennis",
  "Athletics",
  "Walinkg",
];

const SidebarMenu = ({ props, selected = "Running" }) => {
  return (
    <Wrapper>
      {links.map((item) => (
        <Item
          style={{
            "--color":
              item === selected ? `${COLORS.primary}` : `${COLORS.gray[900]}`,
          }}
        >
          {item}
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ol`
  list-style: none;
`;

const Item = styled.li`
  font-family: ${FONTS.raleway};
  font-weight: ${WEIGHTS.medium};
  font-size: ${16 / 16}rem;
  color: var(--color);

  &:not(:first-of-type) {
    padding-top: 2.2vh;
  }
`;

export default SidebarMenu;

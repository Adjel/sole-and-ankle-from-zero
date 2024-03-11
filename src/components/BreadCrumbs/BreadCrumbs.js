import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";

const links = ["Home", "Sale", "Shoes"];

const BreadCrumbs = () => {
  return (
    <BreadCrumbsWrapper>
      {links.map((item) => (
        <Crumb>
          <Link>{item}</Link>
        </Crumb>
      ))}
    </BreadCrumbsWrapper>
  );
};

const BreadCrumbsWrapper = styled.ol`
  list-style: none;
  color: ${COLORS.gray[700]};
`;

const Crumb = styled.li`
  display: inline;

  &:not(:first-of-type) {
    &:before {
      content: "";
      display: inline-block;
      margin-left: 8px;
      margin-right: 8px;
      height: 0.8em;
      border-right: 1px solid;
      transform: rotate(35deg);
      opacity: 0.25;
    }
  }
`;

const Link = styled.a`
  color: inherit;
  font-family: ${FONTS.raleway};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

export default BreadCrumbs;

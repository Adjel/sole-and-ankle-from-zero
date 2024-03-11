import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";

const pagesLinks = [
  "SALE",
  "NEW-RELEASES",
  "MEN",
  "WOMEN",
  "KIDS",
  "COLLECTIONS",
];

const Header = () => {
  return (
    <Wrapper>
      <Brand>Sole&Anlke</Brand>
      <CategoriesNavWrapper>
        {pagesLinks.map((item) => (
          <CategoryLink
            style={{
              "--color":
                item === "SALE"
                  ? `${COLORS.secondary}`
                  : `${COLORS.gray[900]}}`,
            }}
          >
            {item}
          </CategoryLink>
        ))}
      </CategoriesNavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.gray[300]};
  height: 72px;
`;

const Brand = styled.span`
  position: absolute;
  font-family: ${FONTS.raleway};
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  margin-left: 32px;
  margin-right: auto;
`;

const CategoriesNavWrapper = styled.div`
  display: flex;
  jusity-content: space-evenly;
  align-items: center;
  margin: auto;
  gap: ${48 / 16}rem;
  font-family: ${FONTS.raleway};
`;

const CategoryLink = styled.nav`
font-family: ${FONTS.raleway}
font-size: ${18 / 16}rem;
font-weight: ${WEIGHTS.medium};
color: var(--color);
`;

export default Header;

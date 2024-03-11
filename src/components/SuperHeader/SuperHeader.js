import React from "react";
import styled, { css } from "styled-components";
import SearchInput from "../SearchInput/SearchInput";
import { COLORS, FONTS } from "../../Constants";
import Help from "../Help.js/Help";
import ShoppingBagIcon from "../ShoppingBag/ShoppingBagIcon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <Help />
      <ShoppingBagIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.gray[900]};
  padding: 12px 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  font-size: 14px;
  font-family: ${FONTS.raleway};
  margin-right: auto;
`;

export default SuperHeader;

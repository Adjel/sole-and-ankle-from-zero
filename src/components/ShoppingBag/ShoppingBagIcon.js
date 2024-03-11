import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../Constants";
import Icon from "../Icon/Icon";

const ShoppingBagIcon = () => {
  return (
    <BasketLink>
      <ShoppingIcon id="shopping-bag" strokeWidth={1} size={16} />
    </BasketLink>
  );
};

const BasketLink = styled.a`
  display: block;
  width: 16px;
  height: 16px;
  margin: auto 0;
  href='';
`;

const ShoppingIcon = styled(Icon)`
  color: ${COLORS.gray[300]};
`;

export default ShoppingBagIcon;

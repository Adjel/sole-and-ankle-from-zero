import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";

const STYLES = {
  new: {
    content: "Just Released",
    color: `${COLORS.secondary}`,
  },

  sale: {
    content: "Sale",
    color: `${COLORS.primary}`,
  },

  none: {
    content: undefined,
    color: undefined,
  },
};

const oneMonthAgo = Date.now() - 1000 * 60 * 60 * 24 * 30;

const Item = ({ name, imageSrc, price, salePrice, releaseDate, option }) => {
  let style = undefined;
  if (releaseDate > oneMonthAgo) {
    style = STYLES.new;
  } else if (salePrice) {
    style = STYLES.sale;
  } else {
    style = STYLES.none;
  }

  return (
    <ItemWrapper>
      <Wrapper>
        {style && (
          <VisibleLabel
            style={{
              "--color": style.color,
            }}
          >
            {style.content}
          </VisibleLabel>
        )}
        <ItemImage src={imageSrc}></ItemImage>
      </Wrapper>
      <InfoWrapper>
        <ItemName>{name}</ItemName>
        <ItemPrice>{"$" + `${price / 100}`}</ItemPrice>
      </InfoWrapper>
      <InfoWrapper>
        <ItemOptions>
          {option + `${option > 1 ? " Colors" : " Color"}`}
        </ItemOptions>
        {salePrice && <ItemNewPrice>{"$" + `${salePrice / 100}`}</ItemNewPrice>}
      </InfoWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  max-width: 31%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  radius: 16px, 16px, 4px, 4px;
  margin-bottom: 8px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const VisibleLabel = styled.div`
  position: absolute;
  color: ${COLORS.white};
  background-color: var(--color);
  border-radius: 2px;
  margin: auto;
  padding: 8px;
  top: 12px;
  right: -4px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

const ItemName = styled.span`
  font-family: ${FONTS.raleway};
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const ItemOptions = styled.span``;

const ItemPrice = styled.span``;

const ItemNewPrice = styled(ItemPrice)``;

export default Item;

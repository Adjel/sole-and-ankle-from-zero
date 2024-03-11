import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
import SHOES from "../../data";

const ItemGrid = () => {
  return (
    <Column>
      {SHOES.map((item) => (
        <Item
          name={item.name}
          imageSrc={item.imageSrc}
          price={item.price}
          salePrice={item.salePrice}
          releaseDate={item.releaseDate}
          option={item.numOfColors}
        ></Item>
      ))}
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150vh;
  flex-wrap: wrap;
  margin-top: 32px;
  align-content: space-between;
`;

export default ItemGrid;

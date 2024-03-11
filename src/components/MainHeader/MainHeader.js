import React from "react";
import styled from "styled-components";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Category from "../Category/Category";
import Selector from "../Selector/Selector";

const MainHeader = () => {
  return (
    <>
      <Wrapper>
        <BreadCrumbs />
        <Category />
        <Selector />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default MainHeader;

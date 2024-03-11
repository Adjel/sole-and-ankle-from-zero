import React from "react";
import styled from "styled-components";
import MainHeader from "../MainHeader/MainHeader";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import ItemGrid from "../ItemGrid/ItemGrid";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Category from "../Category/Category";
import Selector from "../Selector/Selector";

const MainComponent = () => {
  return (
    <MainWrapper>
      <SideWrapper>
        <BreadCrumbs />
        <SidebarMenu />
      </SideWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <Category />
          <Selector />
        </HeaderWrapper>
        <ItemGrid />
      </ContentWrapper>
    </MainWrapper>
  );
};

/*
    <MainWrapper>
      <HeaderWrapper>
        <MainHeader />
      </HeaderWrapper>
      <ContentWrapper>
        <SidebarMenu />
        <ItemGrid />
      </ContentWrapper>
    </MainWrapper>
*/
const MainWrapper = styled.div`
  display: flex;
  padding-top: 6.4vh;
  margin-left: -40px;
  justify-content: space-around;
`;

const SideWrapper = styled.div`
  display: flex;
  min-width: 15%;
  max-width: 20%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 75%;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export default MainComponent;

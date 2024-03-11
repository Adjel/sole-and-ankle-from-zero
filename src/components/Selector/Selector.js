import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";
import Icon from "../Icon/Icon";

const Selector = ({
  label = "Sort",
  presentational: displayedValue = "Newest Releases",
}) => {
  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <DisplayedBit>{displayedValue}</DisplayedBit>
        <NativeSelect>
          <option value="">Newest Releases</option>
          <option value="dog">Good Deals</option>
          <option value="cat">Popular Articles</option>
          <option value="hamster">Limited Editions</option>
        </NativeSelect>
        <ChevronIcon id="chevron-down" strokeWidth={2} size={24} />
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const VisibleLabel = styled.span`
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
  font-family: ${FONTS.raleway};
  font-size: ${16 / 16}rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 16px;
  opacity: 0;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  font-family: ${FONTS.raleway};
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  background-color: hsla(185, 5%, 95%, 1);
  border-radius: 8px;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  color: inherit;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Selector;

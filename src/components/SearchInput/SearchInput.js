import React from "react";
import styled, { css } from "styled-components";
import { COLORS, FONTS, WEIGHTS } from "../../Constants";
import Icon from "../Icon/Icon";

const SearchInput = ({ placeholder = "Search..." }) => {
  return (
    <Label>
      <Input placeholder={placeholder} />
      <SearchIcon id="search" strokeWidth={1} size={16} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  padding-left: 24px;
  outline-offset: 4px;
  font-size: 0.875rem;
  weight: ${WEIGHTS.normal};
  font-family: ${FONTS.raleway};

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(Icon)`
  color: ${COLORS.gray[300]};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;

export default SearchInput;

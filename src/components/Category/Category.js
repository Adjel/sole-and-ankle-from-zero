import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../Constants";

const Category = ({ category = "Running" }) => {
  return <CategoryElement>{category}</CategoryElement>;
};

const CategoryElement = styled.span`
    color: ${COLORS.gray[900]}
    font-size:${24 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    margin-right: auto;
`;

export default Category;

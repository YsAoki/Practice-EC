import { Link } from "react-router-dom";
import styled from "styled-components";

export const SSeeMoreLink = styled(Link)`
  color: ${({theme}) => theme.color.oftenBlue};
  text-decoration: none;
`

export const SSpan = styled.span`
  margin-left: 8px;
`;

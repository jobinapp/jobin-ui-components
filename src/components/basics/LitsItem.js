import React from "react";
import styled from "styled-components";
import { black, greyLight, white } from "../../constants/colors";

const UlStyled = styled.ul`
  margin-top: 0;
  padding-left: 0;
  padding-bottom: 12px;
  list-style: none;
  position: absolute;
  z-index: 2;
  top: 49px;
  width: 100%;
  background-color: ${white};
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--white-two);
  border-top: none;
`;

const LinkStyled = styled.a`
  display: block;
  padding: 8px 16px 8px 48px;
  font-size: 14px;
  color: ${black};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: ${greyLight};
  }
`;

const ListItem = props => {
  return (
    <UlStyled className="query-results" {...props}>
      {props.items.map((item, index) => {
        return (
          <li key={item.name + index} className="no-hide">
            <LinkStyled href={`${props.baseurl}${item.param}`}>
              {item.name}
            </LinkStyled>
          </li>
        );
      })}
    </UlStyled>
  );
};

export default ListItem;

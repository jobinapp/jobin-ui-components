import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { white, black } from "../../constants/colors";


const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 132px;
  background: ${white};
  padding: 24px;
  border-radius: 4px;
  border: 1px rgba(0,0,0,.15) solid;
  box-sizing: border-box;
  cursor:pointer;
  text-decoration:none;
  color:${black};
`;

const ImageStyled = styled.img`
  width: 40px;
  height: 40px;
  align-self: start;
  justify-self: center;
`;

const GuildTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin:0px;
  margin: 0px;
  align-self: center;
  justify-self: center;
`;
const ChildrenWrapper = styled.div`
  text-align: center;
  display:grid;
  grid-template-columns: 100%;
  gap: 8px 0px;

`;

const Guild = props => {
  const guildRef = useRef(null);

  useEffect(() => {
  })
  return (
    <LinkStyled ref={guildRef}  {...props}>
      <ChildrenWrapper>
        <ImageStyled src={props.guildImgSrc} />
        <GuildTitle>{props.guildTitle}</GuildTitle>
      </ChildrenWrapper>
    </LinkStyled>
  );
};

export default Guild;

import React, { useState } from "react";
import styled from "styled-components";
import { greyLight, greenDark } from "../../constants/colors";
import { P } from "../../components/texts";

const NavStyled = styled.nav`
  padding-bottom:32px;
`;

const UlStyled = styled.ul`
  display:flex;
  justify-content:flex-start;
  border-bottom: 1px solid ${greyLight};
`;

const LiStyled = styled.li`
  position:relative;
  padding: 24px 32px;
  border-right:1px solid ${greyLight};
  cursor:pointer;
  
  &:first-child {
    border-left:1px solid ${greyLight};
  }

  ${props => props.isActive && `
    &:after {
      content:"";
      display:block;
      position:absolute;
      height:3px;
      width:100%;
      background: ${greenDark};
      bottom:0px;
      left:0;
    }
  
  `};

`;

const TabContent = props => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNavItemClick = (index) => setCurrentTab(index)

  return (
    <div>
      <NavStyled>
        <UlStyled>{props.tabsPane.map((tabPane, i) => <LiStyled key={i} isActive={currentTab === i} onClick={() => handleNavItemClick(i)}><P style={{fontWeight: 600}}>{tabPane.title}</P></LiStyled>)}</UlStyled>
      </NavStyled>
      <div>
        {props.tabsPane[currentTab].content}
      </div>
    </div>
  );
}

export default TabContent;
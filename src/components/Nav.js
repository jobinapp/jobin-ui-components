import React, { useState, useEffect } from "react";
import Container from "./layout/Container";
import styled from "styled-components";

//Styles
import { black, white, red } from "../constants/colors";
import device from "../constants/mediasQueries";

//Asstes
import MenuBotton from "../icons/images/Menu";

const Div = styled.div`
  display: block;
  height: 100%;
`;

const LinkHome = styled.a`
  display: block;
  width: 35px;
  height: 39.1px;
  margin-top: 20px;
  margin-left: -36px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 145px;
  }
  @media ${device.tablet} {
    overflow: visible;
    width: 145px;
  }
`;

const NavContainer = styled.nav`
  position: absolute;
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  height: 72px;
  background-color: ${props => props.mainColor};
  z-index: 1000;

  ${props =>
    props.isFixed &&
    `
        position:fixed;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
    
        & ,ul {
          background-color:${props.altColor};
        }
    
        & li a {
          color: ${props.mainColor};
        }
      `}
`;

const ContainerStyled = styled(Container)`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 75%;
    flex-wrap: nowrap;
  }
`;

const MenuContainer = styled.ul`
  ${props => (props.isMenuVisible ? "display: none;" : "display:block;")}
  position: fixed;
  width: 100%;
  height: 100%;
  top: 71px;
  left: 0px;
  background-color: ${props => props.mainColor};
  margin-right: -36px;

  @media ${device.tablet} {
    position: static;
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
  }
`;

const MenuItem = styled.li`
  margin-right: 16px;
  margin-left: 16px;
  font-size: 14px;

  @media ${device.tablet} {
    ${props =>
      props.isActive &&
      `border-bottom:1px solid ${props.hover ? props.hover : red}`}

    &:last-child {
      margin-right: 0px;
    }

    &:first-child {
      margin-left: 0px;
    }
  }
`;

const LinkMenu = styled.a`
  color: ${props => props.altColor};
  font-weight: 600;
  text-decoration: none;
  transition: 0.5s all;

  ${props =>
    props.isActive && `color:${props.hover ? props.hover : red} !important`}

  &:hover {
    color: ${props => (props.hover ? props.hover : red)};
    transition: 0.5s all;
  }
`;

const LinkMenuWithIcon = styled(LinkMenu)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px;
  ${props => props.direction == "left" && "margin-left:0px;"}

  & span {
    order: ${props => (props.direction == "left" ? "2" : "1")};
    ${props => props.direction == "right" && "margin-right:16px;"}
  }

  & svg {
    order: ${props => (props.direction == "left" ? "1" : "2")};
  }

  @media ${device.tablet} {
    justify-content: space-between;
    margin-left: 0px;
  }
`;

const ButtonToggleNav = styled.button`
  height: 100%;
  width: 55px;
  background: transparent;
  border: none;
  outline: none;
  &:active {
    border: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

let styledIcon = element => {
  const Icon = styled(element)`
    display: block;
    margin-right: 16px;
    ${props =>
      props.className == "hidden" &&
      `
        @media ${device.tablet} {
          display: none;
          margin-right:0px;
        }
      `};
  `;
  return Icon;
};

const Nav = props => {
  const STICKY_SINCE = props.stickyScrollSince || 10
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isFixed, setFixed] = useState(() => {
    return window.scrollY > STICKY_SINCE
  });
  const [mainColor, setMainColor] = useState(() => {
    return props.mainColor || black;
  });
  const [altColor, setAltColor] = useState(() => {
    return props.altColor || white;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = event => {
    setFixed(event.currentTarget.scrollY > STICKY_SINCE);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <NavContainer
      isFixed={isFixed}
      altColor={altColor}
      mainColor={mainColor}
      hover={props.hover}
      className="container-fuild"
    >
      <ContainerStyled>
        <Div>
          <LinkHome href={props.brand.link}>
            <props.brand.logo mainColor={isFixed ? mainColor : altColor} />
          </LinkHome>
        </Div>
        <ButtonToggleNav onClick={toggleMenu}>
          <MenuBotton mainColor={isFixed ? mainColor : altColor} />
        </ButtonToggleNav>
        <MenuContainer
          mainColor={mainColor}
          isMenuVisible={isMenuVisible}
          collapsed={isMenuVisible ? "collapsed" : ""}
        >
          {props.items.map((item, i) => {
            let Icon = item.icon.icon;
            Icon = styledIcon(Icon);
            return (
              <MenuItem key={i} isActive={item.active}>
                <LinkMenuWithIcon
                  hover={props.hover}
                  altColor={altColor}
                  direction={item.direction}
                  isActive={item.active}
                  href="#"
                >
                  <Icon
                    className={item.icon.isAlwaysVisible}
                    mainColor={
                      item.active ? props.hover : isFixed ? mainColor : altColor
                    }
                  />
                  <span>{item.text}</span>
                </LinkMenuWithIcon>
              </MenuItem>
            );
          })}
        </MenuContainer>
      </ContainerStyled>
    </NavContainer>
  );
};

export default Nav;

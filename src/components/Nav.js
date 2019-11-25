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
  margin-left:0px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 145px;
  }
  @media ${device.tablet} {
    overflow: visible;
    width: 145px;
    margin-left: -36px;
  }
`;

const NavContainer = styled.nav`
  position: absolute;
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  height: 72px;
  background-color: ${props => props.bgColor};
  z-index: 1000;

  & li a {
    color: ${props => props.itemsColor || props.mainColor};
  }

  ${props =>
    !props.isSticky ||
    (props.isFixed &&
      `
        position:fixed;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
    
        & ,ul {
          background-color:${props. bgColorWhenSticky || props.mainColor};
        }
    
        & li a {
          color: ${props.itemsColorsWhenSticky || props.bgColor};
        }
      `)}
`;

const ContainerStyled = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.tablet} {
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
  background-color: ${props => props.bgColor};
  margin-right: -36px;

  ${props => (!props.isMenuVisible && `
    & li {
      margin-left:32px;
      padding:8px;
    }
  
  `)}

  @media ${device.tablet} {
    position: static;
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
  }
`;

const MenuItem = styled.li`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 14px;

  a {
    position:relative;
  }

  @media ${device.tablet} {
    ${props =>
      props.isActive &&
      `
      & a:after {
        content: "";
        display:block;
        position:absolute;
        width: 100%;
        height: 2px;
        background: ${props.activeColor || (props.hover ? props.hover : red)};
        bottom:-8px;
      }` 
    }


    font-size: 13px;
    ${props =>
      props.isActive &&
      `/* border-bottom:2px solid ${props.activeColor || (props.hover ? props.hover : red)} */`}

    &:last-child {
      margin-right: 0px;
    }

    &:first-child {
      margin-left: 0px;
    }
  }
  @media ${device.laptop} {
    margin-right: 16px;
    margin-left: 16px;
  }
  
`;

const LinkMenu = styled.a`
  color: ${props => props.mainColor};
  font-weight: 600;
  text-decoration: none;
  transition: 0.5s all;

  ${props =>
    props.isActive && `color:${props.activeColor || (props.hover ? props.hover : red)} !important`}

  &:hover {
    color: ${props => (props.hover ? props.hover : red)};
    transition: 0.5s all;
  }
`;

const LinkMenuWithIcon = styled(LinkMenu)`
  display: flex;
  justify-content: start;
  align-items: center;
  
  ${props => props.direction === "left" && "margin-left:0px;"}

  & span {
    order: ${props => (props.direction === "left" ? "2" : "1")};
    ${props => props.direction === "right" && "margin-right:8px;"}
  }

  & svg {
    order: ${props => (props.direction === "left" ? "1" : "2")};
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
    width: 24px;
    ${props =>
      props.className === "hidden" &&
      `
        @media ${device.tablet} {
          display: none;
          margin-right:0px;
        }
      `};
  `;
  return Icon;
};

/*

          hover: Set hover of Menu items, it isnt defined the default value is red
          bgColor: Set backgroundColor for de Nav container and ul, it inst defined default will be black
          mainColor: Set color for the items of the menu like <a> tags and svg icons and logo
          brand: {{ logo: React component (could be anything), link: Link for redirection }}
          brandColor: Is the element is a Svg it will set the color, you should configure your svg like a Reac component who recived and main color propety. This property will be overrite the mainColor setted before
          brandColorWhenSticky: It is the color of the brand when navbar is fixed. (Againg this will only work for Svg)
          bgColorWhenSticky: Set background color of nav and ul when navbar is sticky
          items: Array of objects with nav items
          itemsColor: Set color of <a> elements. This will overwrite mainColor for those elements
          itemsColorsWhenSticky:  Set color of <a> elements when navbar is sticky. This will overwrite bgColor for those elements
          isSticky: Default is true. It is set to false the propieties who depends of sticky state wont work.


*/

const Nav = props => {
  const STICKY_SINCE = props.stickyScrollSince || 10;
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isFixed, setFixed] = useState(true);
  const [bgColor] = useState(() => {
    return props.bgColor || black;
  });
  const [mainColor] = useState(() => {
    return props.mainColor || white;
  });

  useEffect(() => {
    if (props.isSticky) {
      setFixed(window.scrollY > STICKY_SINCE);
      window.addEventListener("scroll", handleScroll)
    };

    window.addEventListener("resize", handleResize);

    // unmount
    return () => {
      if (props.isSticky) window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [props.isSticky, isFixed, isMenuVisible]);

  const handleScroll = event => {
    setFixed(event.currentTarget.scrollY > STICKY_SINCE);
  };

  const handleResize = () => {
    if (window.screen.width >= 786) {
      setMenuVisible(true)
    }
  }

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <NavContainer
      isFixed={isFixed}
      mainColor={mainColor}
      bgColor={bgColor}
      hover={props.hover}
      className="container-fuild"
      itemsColor={props.itemsColor}
      itemsColorsWhenSticky={props.itemsColorsWhenSticky}
      isSticky={props.isSticky ? true : false}
      bgColorWhenSticky={props.bgColorWhenSticky}
    >
      <ContainerStyled>
        <Div>
          <LinkHome href={props.brand.link}>
            <props.brand.logo
              mainColor={
                props.isSticky ?
                  isFixed ? props.brandColorWhenSticky || bgColor
                          : props.brandColor || mainColor
                  : props.brandColor || mainColor
              }
            />
          </LinkHome>
        </Div>
        <ButtonToggleNav onClick={toggleMenu}>
          <MenuBotton mainColor={
                props.isSticky ?
                  isFixed ? props.itemsColorsWhenSticky || bgColor
                          : props.itemsColor || mainColor
                  : props.itemsColor || mainColor
              } />
        </ButtonToggleNav>
        <MenuContainer
          bgColor={bgColor}
          isMenuVisible={isMenuVisible}
          collapsed={isMenuVisible ? "collapsed" : ""}
        >
          {props.items && props.items.map((item, i) => {
            let Icon = item.icon ? styledIcon(item.icon.icon) : null;
            return (
              <MenuItem key={i} isActive={item.active} activeColor={props.itemsActiveColor} >
                <LinkMenuWithIcon
                  hover={props.hover}
                  mainColor={mainColor}
                  direction={item.direction}
                  isActive={item.active}
                  activeColor={props.itemsActiveColor}
                  href={item.link}
                >
                  {
                    Icon && <Icon
                    className={item.icon.isAlwaysVisible}
                    mainColor={
                      item.active
                        ? props.hover
                        : isFixed
                        ? props.itemsColorsWhenSticky ||
                          bgColor
                        : props.itemsColor || mainColor
                    }
                  />
                  }
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

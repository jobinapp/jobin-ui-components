import React from "react";
import Container from "./layout/Container";
import styled from "styled-components";
import SocialNav from "./SocialNav";
import { Grid } from "../components/layout";

//Styles
import { greyDark } from "../constants/colors";

import device from "../constants/mediasQueries";

const FooterStyled = styled.footer`
  background-color: #f8f7f5;
  max-width: 100%;
  padding-top: 56px;
  padding-bottom: 34px;
  ${props => props.style}
`;

const ListContainer = styled.ul`
  width: 100%;
  h5 {
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 16px;
  }

  li {
    font-size: 14px;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  li a,
  h5 {
    text-decoration: none;
    color: ${greyDark};
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WrapperAlt = styled(Grid)`
  margin-bottom: 58px;
`;

const WrapperCenter = styled(Wrapper)`
  justify-content: center;

  div:first-child {
    width: 100%;
    order: 2;
    p {
      text-align: center;
    }
  }

  div:last-child {
    order: 1;
    margin-bottom: 16px;
    width: 100%;
    ul {
      justify-content: center;
    }
  }

  @media ${device.tablet} {
    justify-content: space-between;
    div:first-child {
      width: 60%;
      order: 1;
      p {
        text-align: left;
      }
    }

    div:last-child {
      order: 2;
      margin-bottom: 16px;
      width: 40%;
      ul {
        justify-content: flex-end;
      }
    }
  }
`;

const SocialNavStyled = styled(SocialNav)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-top: 24px;

  li {
    margin-right: 19px;

    &:last-child {
      margin-right: 0px;
    }
  }

  @media ${device.mobileM} {
    padding-top: 0px;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;

  @media ${device.laptop} {
    text-align: left;
  }
`;

const Footer = props => {
  let renderItems = items => {
    return (
      <div>
        {items.children.map((item, i) => (
          <li key={`${item.title}-${i}`}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </div>
    );
  };

  return (
    <FooterStyled className={props.className} style={{ ...props.style }}>
      <Container>
        <WrapperAlt
          laptop="auto auto auto auto"
          tablet="auto auto auto"
          mobileL="auto auto"
          mobileM="auto auto"
          mobileS="auto auto"
          gap="48px 24px"
        >
          {props.items && props.items.map((items, i) => (
            <ListContainer key={`${items.title}-${i}`}>
              <h5>{items.title}</h5>
              {renderItems(items)}
            </ListContainer>
          ))}
        </WrapperAlt>
        {props.children && <div>{props.children}</div>}
        <WrapperCenter>
          <div>
            <Copyright style={{ color: greyDark, margin: 0 }}>
              {props.copyright}
            </Copyright>
          </div>
          {props.social && (
            <div>
              <SocialNavStyled icons={props.social} />{" "}
            </div>
          )}
        </WrapperCenter>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

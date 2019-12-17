import React from "react";
import styled from "styled-components";
import { black, greyDark, greyLight, greyBackground } from "../constants/colors";
import { P } from "./texts";
import { Title } from "./titles";
import moment from "moment/min/moment-with-locales";
import Image from "../components/basics/Image";

const AuthorWrapper = styled.a`
  display: block;
  color: ${black};
  font-size: 14px;
  text-decoration: none;
  display:grid;
  grid-template-columns: 20px auto;
  gap: 12px;
  transform: translateX(-32px);

  &:before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 20px;
    background: ${greyDark};
    align-self:center;
  }
`;
const DateWrapper = styled.time`
  display: block;
  color: rgba(29, 27, 26, 0.4);
`;

const WrapperWithDecoration = styled.div`
  position: relative;
  padding-left: 32px;
`;

const Post = props => {
  const locale = window
    ? window.navigator.userLanguage || window.navigator.language
    : "es";
  const { postObj, imageAspectRatio, loading, ...rest } = props;

  return (
    <div {...rest}>
      <Image
        aspectRatio={props.imageAspectRatio || "4:3"}
        alt={props.postObj.title}
        src={props.postObj.postImage}
        style={{ marginBottom: 24, borderRadius: 4 }}
        cover="height"
      />
      <Title hierarchy={4} style={{ paddingBottom: 8, fontSize: 20 }}>
        <a
          href={props.postObj.link}
          style={{ color: black, textDecoration: "none" }}
        >
          {props.postObj.title}
        </a>
      </Title>
      <P style={{ paddingBottom: 16 }}>{props.postObj.excerpt}</P>
      <WrapperWithDecoration>
        <AuthorWrapper href={props.postObj.author.link}>
          <span>{props.postObj.author.name}</span>
        </AuthorWrapper>
        <DateWrapper>
          {moment(props.postObj.date)
            .locale(locale)
            .fromNow()}
        </DateWrapper>
      </WrapperWithDecoration>
    </div>
  );
};

export default Post;

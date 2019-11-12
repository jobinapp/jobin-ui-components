import React from "react";
import styled from "styled-components";
import { black, greyDark, greyLight } from "../constants/colors";
import { P } from "./texts";
import { Title } from "./titles";
import moment from "moment/min/moment-with-locales";
import Image from "../components/basics/Image";

const AuthorWrapper = styled.a`
  display:block;
  color:${black};
  font-size:14px;
  text-decoration:none;

`;
const DateWrapper = styled.time`
  display:block;
  color:${greyDark};
`;

const WrapperWithDecoration = styled.div`
  &:before {
    content: "";
    display:block;
    margin-bottom:8px;
    height: 1px;
    width: 25px;
    background: ${greyDark};
  }
`;

const Post = props => {
  const locale = window ? window.navigator.userLanguage || window.navigator.language : "es";
  const {postObj, imageAspectRatio, loading, ...rest} = props;

  return (
    <div {...rest}>
      <Image  aspectRatio={props.imageAspectRatio || "4:3"} alt={props.postObj.title} src={props.postObj.postImage} style={{marginBottom:24, borderRadius: 4}} cover="height"/>
      <Title hierarchy={4} style={{paddingBottom:8}}><a href={props.postObj.link} style={{color: black, textDecoration: "none"}}>{props.postObj.title}</a></Title>
     <P style={{paddingBottom:16}}>{props.postObj.excerpt}</P>
     <WrapperWithDecoration>
        <AuthorWrapper href={props.postObj.author.link}>{props.postObj.author.name}</AuthorWrapper>
        <DateWrapper>{moment(props.postObj.date).locale(locale).fromNow()}</DateWrapper>
      </WrapperWithDecoration>
    </div>
  );
};

export default Post;




import React from "react";
import { Image } from "../basics";
import { P } from "../texts";
import { CallToAction } from "../basics/button";
import { greenDark } from "../../constants/colors";
import styled from "styled-components";

const GuildTitle = styled(P)`
  text-align:left;
  font-weight: bold;
  padding-top:8px;
  font-size: 16px;
`;

const GuildWrapper = styled.a`
  display:block;
  width:222px;
  text-decoration:none;
`;

const GuildWithImage = props => {
  const {
    guildImgSrc,
    guildTitle,
    callToActionColor,
    guildLink,
    ...rest
  } = props;

  return (
    <GuildWrapper href={guildLink}{...rest}>
      <Image
        src={guildImgSrc}
        aspectRatio="16:9"
        alt={guildTitle}
        cover="width"
        style={{ borderRadius: "4px" }}
      />
      <GuildTitle>
        {guildTitle}
      </GuildTitle>
      {
        props.callToActionVisible && <div style={{ paddingTop: 8 }}>
        <CallToAction
          buttonText="Ver más"
          mainColor={callToActionColor || greenDark}
          hasIcon={true}
          style={{ paddingLeft: 0, fontSize: 14 }}
          href={guildLink}
        />
      </div>
      }
    </GuildWrapper>
  );
};

export default GuildWithImage;

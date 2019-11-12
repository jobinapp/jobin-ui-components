import React from "react";
import { Image } from "../basics";
import { P } from "../texts";
import { CallToAction } from "../basics/button";
import { greenDark } from "../../constants/colors";

const GuildWithImage = props => {
  const {
    guildImgSrc,
    guildTitle,
    callToActionColor,
    guildLink,
    ...rest
  } = props;

  return (
    <div style={{ width: 222 }} {...rest}>
      <Image
        src={guildImgSrc}
        aspectRatio="16:9"
        alt={guildTitle}
        style={{ borderRadius: "4px" }}
      />
      <P style={{ paddingTop: 8, fontSize: 14, fontWeight: 600 }}>
        {guildTitle}
      </P>
      <div style={{ paddingTop: 8 }}>
        <CallToAction
          buttonText="Ver más"
          mainColor={callToActionColor || greenDark}
          hasIcon={true}
          style={{ paddingLeft: 0, fontSize: 14 }}
          href={guildLink}
        />
      </div>
    </div>
  );
};

export default GuildWithImage;

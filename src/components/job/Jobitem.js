import React from "react";
import styled from "styled-components";
import Card from "../basics/Card";
import P from "../texts/P";

//Styles

import { greenDark, black } from "../../constants/colors";

//Icons
import UserIcon from "../../icons/images/User";
import LocationIcon from "../../icons/images/Location";
import CalendarIcon from "../../icons/images/Calendar";


const Guild = styled.span`
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.2px;
    color:${greenDark}
    padding-bottom:4px;

`;

const JobDesc = styled(P)`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: ${black};
`;
const TextIconAligned = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;

    svg {
        vertical-align: bottom;
    }

    span:first-child {
        margin-right:8px;
    }

`;

const Jobitem = props => {
    return (
        <Card style={{...props.style}} onClick={props.onJobItemClick}>
            <div className="Guild">
                <Guild>{props.guild}</Guild>
            </div>
            <div>
                <JobDesc>{props.title}</JobDesc>
            </div>
            <TextIconAligned className="Jober">
                <span><UserIcon style={{width:14.7}}/></span>
                <span>{props.user}</span>
            </TextIconAligned>
            <TextIconAligned className="Location">
                <span><LocationIcon style={{width:14.7}}/></span>
                <span>{props.location}</span>
            </TextIconAligned>
            <TextIconAligned className="Jober">
                <span><CalendarIcon style={{width:14.7}}/></span>
                <span>{props.date}</span>
            </TextIconAligned>
        </Card>
    );
}

export default Jobitem;
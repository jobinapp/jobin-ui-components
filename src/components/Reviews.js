import React, { useState, useEffect, useRef } from "react";
import Grid from "../components/layout/Grid";
import PropTypes from "prop-types";
import styled from "styled-components";

//Styles
import { black } from "../constants/colors";
import device from "../constants/mediasQueries";

const ImageRound = styled.img`
    opacity:0.5;
    width:56px;
    border-radius:50%
`;

const ImageRoundActive = styled(ImageRound)`
    opacity: 1;
`;

const FlexContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const Textbig = styled.p`
    margin-top:0px;
    font-size: 24px;
    color:${black}
`;

const Textsmall = styled(Textbig)`
    font-size: 16px;
    text-align: right;
`;

const TextsContainer = styled.div`
    padding-top:0px;
    height: calc(100% - 56px);
    @media ${device.tablet} {
        padding-top:56px;
    }


`;

const ImageContainer = styled.div`
    display:none;
    @media ${device.tablet} {
        display:block;
    }

`;

const Reviews = props => {
   const [activeReview, setActiveReview] = useState(0);
   const [timerID, setTimerID] = useState();

   const activeReviewRef = useRef(activeReview)
   activeReviewRef.current = activeReview

    useEffect(() => {
        if(props.autoplay) {
            let id = setTimeout(() => {
                if(activeReviewRef.current  >= (props.items.length - 1)) {
                    setActiveReview(0);
                } else {
                    setActiveReview((activeReviewRef.current + 1));
                }
                
            }, props.time ? props.time : 3000);
   
            setTimerID(id);
        }
            
        
        

        return  () => {
            if(props.autoplay)  clearTimeout(timerID)
        };
        
    }, [activeReview])
    
   
   let onReviewClick = i => {
        if (props.autoplay) clearTimeout(timerID);
        setActiveReview(i);
   }

    return (
        <div>
                <Grid  
                    tablet="calc(50% - 106px) auto"
                    laptop="calc(50% - 106px) auto"
                    gap="0px 106px" >
                    <ImageContainer>
                        <div>
                            <img style={{maxWidth:"100%"}} src={props.items[activeReview].imgUrl} />
                        </div>
                    </ImageContainer>
                    <FlexContainer>
                        <TextsContainer>
                            <Textbig>“{props.items[activeReview].review}”</Textbig>
                            <Textsmall><strong>{props.items[activeReview].author}</strong>, {props.items[activeReview].location}</Textsmall>
                        </TextsContainer>
                        <div style={{height: 56, width:"100%"}}>
                            <Grid tag="ul" allResponsive="56px 56px 56px"  gap="0px 10px" >
                                {
                                    props.items.map((item, i) => {
                                        let imgSrc = item.imgThumbUrl,
                                            ConditionalImg = item === props.items[activeReview] ? ImageRoundActive : ImageRound; 
                                        return <li key={i} style={{cursor:"pointer"}} onClick={() => onReviewClick(i)}><ConditionalImg  src={item.imgThumbUrl}/></li>
                                    })
                                }
                            </Grid>
                        </div>
                    </FlexContainer>
                </Grid>
        </div>
    );
}

Reviews.propTypes = {
    time: PropTypes.number,
    autoplay: PropTypes.bool.isRequired
}

export default Reviews;
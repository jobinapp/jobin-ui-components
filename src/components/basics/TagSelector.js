import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

import {greyLight, greyMedium} from '../../constants/colors'
import Close from "../../icons/images/Close";
import ArrowDown from "../../icons/images/ArrowDown";
import ArrowUp from "../../icons/images/ArrowUp";
import CallToAction from './button/CallToAction';
import ButtonImage from './button/ButtonImage';

const Container = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        ${props => props.containerStyle}
    `
    const Bar = styled.div`
        display: block;
        align-items: center;
        padding: 6px 12px 0px;
        border-bottom: 1px solid ${greyLight};
        cursor: text;
        min-height: 36px;
    `
    const Select = styled.div`
        display: block;
        border: solid 1px ${greyLight};
        padding: 6px 12px 0px;
        border-radius: 4px;
        z-index: 1;
    `
    const Option = styled.div`
        display: inline-block;
        font-family: "Muli", sans-serif;
        height: 24px;
        line-height: 20px;
        padding: 2px 6px;
        font-size: 13px;
        border: solid 1px ${greyLight};
        border-radius: 4px;
        margin-right: 6px;
        margin-bottom: 6px;
        background-color:${props => props.selected ? greyLight : '#fff'};
        opacity:${props => props.selected ? 0.5 : 1};
        cursor:${props => props.selected ? null : 'pointer'};

        :hover{
            background-color: ${greyLight}
        }
        
    `
    const Title = styled.label`
        margin-bottom: 6px;
        color: ${greyMedium};
    `

const TagSelector = props => {

    const mainView = useRef();
    const selectView = useRef();

    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [prevItems, setPrevItems] = useState(props.selectedItems); 
    const [selectedItems, setSelectedItems] = useState(props.selectedItems); 

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if(!open){
            
            //Check if the selectedItems are different of the prev selectedItems
            if(selectedItems.length === prevItems.length){
                for(let i=0; i<selectedItems.length; i++){
                    let find = false;
                    const tempItem = selectedItems[i];
                    for(let j=0; j<prevItems.length; j++){
                        const tempItem2 = prevItems[j];
                        if(tempItem.name === tempItem2.name){
                            find = true;
                            break;
                        }
                    }
                    if(!find){
                        onBlur();
                    }
                }
            }
            else onBlur();
        }
    }, [open]);

    const selectItem = item =>{
        setSelectedItems([...selectedItems, item]);
    }

    const removeItem = item =>{
        const tempArray = selectedItems;
        const index = tempArray.findIndex(selectedItem => selectedItem.name === item.name);
        if (index > -1) {
            tempArray.splice(index, 1);
        }
        setSelectedItems(tempArray);
        setUpdate(!update);
    }

    const handleClickOutside = e =>{
        if (!mainView.current.contains(e.target)) {
            setOpen(false);
        }
    }

    const onBlur = () =>{
        setPrevItems(selectedItems);
        props.onBlur(selectedItems);
    }

    return (
        <Container ref={mainView} containerStyle={props.containerStyle}>
            <Bar
                onClick={() => setOpen(true)}
            >
                {selectedItems && selectedItems.length > 0 ?
                    selectedItems.map((item) =>{
                        return(
                            <Option 
                                key={"selected"+item.id}
                                onClick={() => removeItem(item)}
                            >
                                {item.name}
                                <Close height={12} width={12}/>
                            </Option>
                        );
                    }) :
                    <Title>{props.placeholder}</Title>
                }
            </Bar>
            <ButtonImage
                    style={{padding: 0, position: 'absolute', right: 4, top: 4}}
                    svgSrc={open ? ArrowUp : ArrowDown}
                    onClick={()=>setOpen(!open)}
                />
            {open &&
                <Select ref={selectView} multiple>
                    {props.items.map((item) =>{
                        const selected = selectedItems.find(selectedItem => selectedItem.name === item.name);
                        return(
                            <Option 
                                key={item.id}
                                onClick={()=> selected ? null : selectItem(item)}
                                selected={selected}
                            >
                                {item.name}
                            </Option>
                        )
                    })}
                    <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                        <CallToAction
                            style={{fontSize: 12, padding: 0, marginBottom: 8}}
                            buttonText="Cerrar"
                            onClick={()=>setOpen(false)}
                        />
                    </div>
                </Select>
            }
        </Container>

    );
};

export default TagSelector;

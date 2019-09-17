import React from "react";

export default function MenuList(props) {

    const style = {
        menu:{
            position: 'absolute',
            top: 30,
            left: props.left ? null : 10,
            right: props.left ? 10 : null,
            zIndex: 10,
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 14px 36px 2px',
            maxHeight: 'calc(100vh - 152px)',
            overflowY: 'auto',
            background: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: 4,
            width: 200,
            ...props.menuStyle
        },
        selection:{
            paddingRight: 16,
            paddingLeft: 16,
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: '1px solid var(--soft-grey)',
            cursor: 'pointer',
        },
        selectionDisabled:{
            paddingRight: 16,
            paddingLeft: 16,
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: '1px solid var(--soft-grey)',
            opacity: 0.5,

        },
        aditional:{
            paddingRight: 16,
            paddingLeft: 16,
            paddingTop: 8,
            paddingBottom: 8,
            cursor: 'pointer',
            textAlign: 'right'
        },
        aditionalText:{
            color: 'var(--aqua-jobin)',
            fontSize: 10
        }
    }

    return (
        <section style={style.menu}>
            {props.aditionalAction &&
                <div
                    style={style.aditional} 
                    onClick={ props.aditionalAction.aditionalOnClick }
                >
                    <p style={style.aditionalText}>{props.aditionalAction.buttonText}</p>
                </div>
            }
            {props.buttonsArray.map((item, index) => {
                return(
                    <div
                        key={"menu"+index}
                        style={item.disabled ? style.selectionDisabled : style.selection}
                        onClick={() => {
                            if(!item.disabled){
                                props.buttonItemSelected(item);
                            }
                        }}
                    >
                        <p>{item.buttonText}</p>
                    </div>
                )
            })}
        </section>
    )
}

import React, {useState} from 'react';

export type OnOffPropsType={
    on:boolean
    onClickOn:(on:boolean)=>void
}

export const OnOff = (props:OnOffPropsType) => {

    const onStile={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:props.on? "green":"white"
    }
    const offStile={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"3px",
        backgroundColor:props.on? "white":"red"
    }
    const indicatorStile={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor:props.on? "green":"red"
    }
    return (
        <div>
            <div style={onStile} onClick={()=>{props.onClickOn(true)}}>ON</div>
            <div style={offStile} onClick={()=>{props.onClickOn(false)}}>OFF</div>
            <div style={indicatorStile}></div>
        </div>
    );
};


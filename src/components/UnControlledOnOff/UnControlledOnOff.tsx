import React, {useState} from 'react';

type PropsType={
    onChange:(on:boolean)=>void
}
export const UnControlledOnOff = (props:PropsType) => {

    let [on, setOn]=useState(false)
    const onStile = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStile = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStile = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
        return (
        <div>
            <div style={onStile} onClick={onClicked}>ON</div>
            <div style={offStile} onClick={offClicked}>OFF</div>
            <div style={indicatorStile}></div>
        </div>
    );
};


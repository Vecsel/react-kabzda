import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,

}
const callBack=()=>action("collapsed")

export const CollapsedMode = ()=><Accordion title={"Menu"} collapsed={true} onClickCol={callBack()}/>
export const UnCollapsedMode = ()=><Accordion title={"Menu"} collapsed={false} onClickCol={callBack()}/>

export const ModeChanging = ()=> {
    const [value,setValue]=useState<boolean>(true)
    return <Accordion title={"Menu"} collapsed={value} onClickCol={setValue}/>
}


import React, {useState} from 'react';

type AccordionPropsType = {
    title: string,

}


function UnControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed]=useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}
type AccordionTitlePropsType={
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <ol>1</ol>
            <ol>2</ol>
            <ol>3</ol>
        </ul>
    )
}

export default UnControlledAccordion
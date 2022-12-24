import React from 'react';

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onClickCol:(collapsed:boolean)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{props.onClickCol(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody/>}
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
        <h1 onClick={props.onClick}>{props.title}</h1>
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

export default Accordion
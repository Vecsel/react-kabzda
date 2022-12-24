/*
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,

}


export const CollapsedMode = ()=><Accordion title={"Menu"} collapsed={true} onClickCol={()=>action("collapsed")}/>
export const UnCollapsedMode = ()=><Accordion title={"Menu"} collapsed={false} onClickCol={()=>action("collapsed")}/>

export const ModeChanging = ()=> {
    const [value,setValue]=useState<boolean>(true)
    return <Accordion title={"Menu"} collapsed={value} onClickCol={setValue}/>
}

*/
import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const TemplateUseState: ComponentStory<typeof Accordion> = (args) => {
    const [value,setValue]=useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChanged={setValue}/>
};

export const CollapsedMode = Template.bind({});
export const UnCollapsedMode = Template.bind({});
export const ModeChanging = TemplateUseState.bind({});

CollapsedMode.args = {
    title:"Menu",
    collapsed:false,
    onChanged:action("collapsed")
};
UnCollapsedMode.args = {
    title:"Menu",
    collapsed:true,
    onChanged:action("collapsed")
};
ModeChanging.args = {
    title:"Menu"
};
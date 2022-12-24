import React, {useState} from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Reting";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControledAccordion";
import {UnControlledRating} from "./components/UnControlledReting/UnControlledReting";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(true)
    let [onOffValue, setOnOffValue]=useState<boolean>(false)

    return (
        <div>
            {/*<PageTitle title={"Main"}/>
            <Rating value={3}/>*/}
            <OnOff on={onOffValue} onClickOn={setOnOffValue}/>
            <UnControlledOnOff onChange={setOnOffValue}/>
            <UnControlledAccordion title={"Menu"}/>
            <UnControlledAccordion title={"users"}/>
            <UnControlledRating value={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={"Menu"} collapsed={accordionCollapsed} onClickCol={setAccordionCollapsed}/>

        </div>
    );
}


export default App;

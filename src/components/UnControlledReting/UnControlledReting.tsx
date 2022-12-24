import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5

}

export function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendering")
    let [value, setValue]=useState(0)


    return (
        <div>
            <Star selected={value>0} onClick={()=>{setValue(1)}}/>
            <Star selected={value>1} onClick={()=>{setValue(2)}}/>
            <Star selected={value>2} onClick={()=>{setValue(3)}}/>
            <Star selected={value>3} onClick={()=>{setValue(4)}}/>
            <Star selected={value>4} onClick={()=>{setValue(5)}}/>
        </div>
    )


}
type UcRatingProps={
    onClick:()=>void
    selected:boolean
}

export function Star(props: UcRatingProps) {
    return(
        <div>
            <span onClick={props.onClick}>{props.selected? <b>star </b>: "star"} </span>
        </div>

    )


   /* if (props.selected? ){
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }*/

}
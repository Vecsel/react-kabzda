import React from "react";

type PageTitlePropsType ={
    title: string
}
export function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return(
        <div>{props.title}</div>
    )
}
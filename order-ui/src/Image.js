import React from "react";

const Image=(props)=>{
    const {imgSrc}=props
    return(
        <img src={imgSrc} height={150} width={150} />
    )
}

export default Image
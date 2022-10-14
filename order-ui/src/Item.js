import React from "react";
import Image from "./Image";
import AddRemoveItem from "./AddRemoveItem";

const Item=(props)=>{
    const {item,addCartItem} = props

    const handleInfo=()=>{
        alert(item.details)
    }

    return(
        <div>
            <Image imgSrc={item.img} />
            <br/>
            <h3> {item.name} <img src={item.vegMark} height={13} width={13} /> &nbsp;&nbsp; <span onClick={handleInfo} ><em>i</em></span> </h3> 
            <b> INR {item.price} </b> &nbsp; &nbsp; 
            <AddRemoveItem item={item} addCartItem={addCartItem} />
            <hr/>
        </div>
    )
}

export default Item
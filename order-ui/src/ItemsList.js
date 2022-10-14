import React from "react";
import Item from "./Item";

const ItemsList=(props)=>{
    const {avlItems,addCartItem} = props

    return(
        <div>
            {
                avlItems.length===0 ? (
                    <h2>Currently no items available for ordering</h2>
                ) : (
                    <div>
                        <h2>Available items for ordering - {avlItems.length}</h2>
                    { 
                        avlItems.map((item)=>{
                                return <Item key={item.id} item={item} addCartItem={addCartItem} />
                        })
                    }
                    </div>
                )
            }
        </div>
    )
}

export default ItemsList
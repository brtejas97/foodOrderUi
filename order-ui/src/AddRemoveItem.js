import React,{useState,useEffect} from "react";
import {Button} from 'react-bootstrap'

const AddRemoveItem=(props)=>{
    const {item,addCartItem} = props

    const [count,setCount] = useState(0)

    const cartItem = {
        name: item.name,
        price: item.price,
        count: count
    }

    
    useEffect(()=>{
            if(count>=0) addCartItem(cartItem)
    },[count])

    const handleAdd=()=>{
        setCount(count+1)
    }

    const handleRemove=()=>{
        setCount(count-1)
    }

    return(
                count===0 ? (
                    <Button onClick={handleAdd}>Add</Button>
                ) : (
                    <span>
                        <Button onClick={handleRemove}>-</Button>
                        <span> <b>{count}</b> </span>
                        <Button onClick={handleAdd}>+</Button>
                    </span>
                )   
    )
}

export default AddRemoveItem
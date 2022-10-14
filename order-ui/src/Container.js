import React,{useState} from 'react'

import Pata from './Pata'
import ItemsList from './ItemsList'
import Cart from './Cart'
import Search from './Search'
import './Container.css'

const Container=(props)=>{
    const {avlItems} = props
    const [avlblItems,setAvlblItems] = useState(avlItems)
    const [cartItems,setCartItems] = useState([])
    const [searchToggle,setSearchToggle] = useState(false)

    const addCartItem=(cartItem)=>{
        const result = cartItems.filter((ele)=>{
            return ele.name!==cartItem.name
        })
            setCartItems([...result,cartItem])
    }
    
    const searchTextReader=(srcTxt)=>{
        if(srcTxt.length>0){
            const result = avlItems.filter((ele)=>{
                return ele.name.toLowerCase().includes(srcTxt.toLowerCase())
            })
            if(result.length>0){
                setAvlblItems(result)
                setSearchToggle(false)
            }
            else{
                setSearchToggle(true)
                setAvlblItems(avlItems)
            }
        }
        else{
            setSearchToggle(false)
            setAvlblItems(avlItems)
        }
    }

    return(
        <div id='cont'>
            <div style={{display:'flex',justifyContent: 'space-evenly'}} >
                <div>
                    <Pata />
                    <Search searchToggle={searchToggle} searchTextReader={searchTextReader} />
                    <ItemsList avlItems={avlblItems} addCartItem={addCartItem} />
                </div>
                <div>
                    <Cart cartItems={cartItems}/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Container
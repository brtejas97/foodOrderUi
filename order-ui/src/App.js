import React from 'react'
import Container from './Container'

import './App.css'

const App=(props)=>{
    const vgMark='https://cpng.pikpng.com/pngl/s/74-740797_open-circle-clipart.png'
    const nvgMark='https://purefoods.org/uploads/e7e316926d5c90f91ee75808273b2426.svg'
    const avlItems=[
        {name:'C Biryani', price:160, vegMark:nvgMark, isVeg:false, id:15687, details:'Freshly Cooked Kachhi Dum Biryani, cooked with succulent chicken pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron and aromatic Ghee. Served for 1 person with packets of Mirchi Ka Salan and Raita.', img:"https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"},
        {name:'Mixed veg Momos', price:120, vegMark:vgMark, isVeg:true, id:15973, details:'Bite-size dumplings made with a spoonful of stuffing wrapped in dough. Vegetables fillings becomes succulent as it produces an intensively flavored broth sealed inside the wrappers.', img:'https://thecurrymommy.com/wp-content/uploads/2021/09/vegan-momos-1200.jpg'},
        {name:'Manchurian Bowl', price:150, vegMark:vgMark, isVeg:true, id:48932,details:'Veg manchurian, the Indian-Chinese appetizer where crisp fried vegetable balls are dunked in slightly sweet, sour and hot manchurian sauce.', img:'https://vishalexpress.in/wp-content/uploads/2021/11/Chicken-Manchurian-Cropped.jpg'},
        {name:'Butter C', price:180, vegMark:nvgMark, isVeg:false, id:35987, details:'an Indian dish which is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. Its sauce is known for its rich texture. It is similar to chicken tikka masala, which uses a tomato paste.', img:'https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Instant-Pot-Butter-Chicken-Recipe.jpg'},
        {name:'C 65', price:150, vegMark:nvgMark, isVeg:false, id:86249, details:'Chicken 65 is bite size pieces of chicken coated in spicy masala marination consists of chilli powder, turmeric, garam masala powder, lemon juice, ginger, garlic, eggs, rice flour. Marinated chicken is then deep fried till cooked and crispy. Fried chicken is served as it is or tossed in a spicy sauce.', img:'https://www.tropicalcurryandgrill.com/wp-content/uploads/2020/09/chicken65.jpg'},
        {name:'Naan (butter) 1', price:30, vegMark:vgMark, isVeg: true, id:75082, details:'Naan is a leavened flatbread made from white flour. Typically, yeast and yogurt are used to leaven the bread. Traditional Naan is baked in a clay oven, called a tandoor. The flattened pieces of dough are slapped onto the sides of the oven and cooked until puffy.', img:'https://www.whiskaffair.com/wp-content/uploads/2019/12/Garlic-Naan-1-3.jpg'}
    ]

    return(
        <div id='main'>
            <h1 id='heading'>Don't starve, order now!</h1>
            <hr/>
            <Container avlItems={avlItems} />
        </div>
    )
}

export default App
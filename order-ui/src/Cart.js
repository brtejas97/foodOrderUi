import React,{useEffect,useState} from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

const Cart=(props)=>{
    const {cartItems} = props
    const [cartList,setCartList] = useState([])

    useEffect(()=>{
        const result=cartItems.filter((ele)=>{
            return ele.count!==0
        })
        setCartList([...result])
    },[cartItems])

    function totalCal(){
        let sum=0
        cartItems.forEach((ele)=>{
            sum+=ele.price*ele.count
        })
        if(Math.round(sum*118/100)<500){
            return Math.round(sum*118/100)+30
        }
        return Math.round(sum*118/100)
    }

    const handleOrder=()=>{
        const ref = () => window.location.reload()
        swal({
                title: "Order placed!",
                text: "will be delivered in 30 minutes",
                icon: "success",
                button: "yay!",
              })
            .then(() => {
                swal(ref())
            })
    }

    return(
        <div>
            <h2>Cart</h2>
            { cartList.length>0 ?
            (
                <div>
                    <h3>Cart items - {cartList.length}</h3>
                    <table>
                        <tbody>
                            {
                                cartList.map((ele)=>{
                                    return(
                                        <tr key={ele.name}>
                                            <td> <b> {ele.name} </b> </td>
                                            <td>Quantity-{ele.count}</td>
                                            <td> <b> Total - ₹{ele.price*ele.count}/- </b> </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <table>
                        <tfoot>
                            <tr>{
                                totalCal()<500 &&
                                    <td>
                                        Add <b>₹{500-totalCal()}/-</b> worth items to waive off ₹30/- delivery charges
                                    </td> 
                                }</tr>
                                <tr>
                                    <th><h3> Grand Total (including 18% GST) - </h3></th>
                                    <th><h3>₹{totalCal()}/- {totalCal()>500 && '(Free delivery)'}</h3></th>
                                </tr>
                        </tfoot>
                    </table>
                    <Button onClick={handleOrder}>Place Order</Button>
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Place Order
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            your order will be delivered in 30 minutes 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-primary">OK</button>
                        </div>
                        </div>
                    </div>
                    </div> */}
                </div>
            ) :(
                <h3>Add your first item now!</h3>
            )
            }
        </div>
    )
}

export default Cart
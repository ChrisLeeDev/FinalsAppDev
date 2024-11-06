import React, {useState} from "react";
import Login from "./Login";
import { render } from "react-dom";

export default function Shop(props) {
    let ShopItems = props.items // these are arrays of objects being pass to shop

    const [cart, setCart] = useState ([])

    function AddItem(item){
        setCart( c => [...c, item])
    }

    const renderItems = () => {
        return(
            ShopItems.map((item)=> {
                return(
                    <>
                        <li key = {item.id} > {item.name} </li>
                        <p>Price per piece: ${item.price} </p>
                        <button onClick={() => AddItem (item)} > Add to Cart </button>
                    </>
                )
            })
        )
    }

    const renderCart = () => {
        return(
            cart.map((item) => {
                return(
                    <>
                        <li key={item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        
                    </>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return(
            <>
                <h4>This is the Shop: </h4>
                <ul> {renderItems()} </ul>
                <hr />
                <h4>Cart Items: </h4>
                {cart.length > 0 ? (<ul>{renderCart()}</ul>) : (<p> There are no items in the cart! </p>)}
            </>
        )
    }

}
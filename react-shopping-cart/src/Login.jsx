import React, {useState} from "react"
import Shop from "./shop";
import AdminPanel from "./Admin";
import { render } from "react-dom";

export default function Login(){
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20},
        {id: 4, name: "Item 4", price: 25},
      ]//list of objects to imported as props

      //account list
    let accounts = [
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 2, username: "admin", password: "admin", role:"admin"},
        {id: 3, username: "customer2", password: "customer", role:"customer"},
        {id: 4, username: "customer3", password: "customer", role:"customer"},
    ]

    //boolean state for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //variables for user Roles
    const [role, setRole] = useState("")
    //variables for usernames
    const [enteredUsernames, setEnteredUsernames] = useState("")
    //variables for passwords
    const [enteredPasswords, setEnteredPasswords] = useState("")

    //functional handlers for updating our username
    function getUsername(event){
        setEnteredUsernames(event.target.value)
    }
    //functional handlers for updating our passwords
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }

    //function handler for handling login process
    function handleLogin(){
        accounts.map((account) => 
        {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })

    }
    //component for rendering the login page
    const renderLogin = () => {
        return(
            <div>

                <h1>Login:</h1>
                Username: <input type="text" placeholder="Username" id="username" onChange={getUsername}></input>
                Password: <input type="password" placeholder="Password" id="password" onChange={getPassword}></input>

                <button onClick={handleLogin}>Login</button>
                
            </div>
        )
    }

    //component for rendering the Shop
    const renderShop = () => {
        return(
            <Shop isLoggedIn = {isLoggedIn} items = {items} />
        )
    }
    //component for rendering the Admin Panel
    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn}
            accounts = {accounts} />
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    }else{
        if(role === "customer"){
            return renderShop()
        }else{
            return renderAdmin()
    }

}

}
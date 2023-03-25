import React from "react";
import { useState } from "react";

function Greet(props){
    const greets = new Map();
    greets.set('EN', 'Good Morning');
    greets.set('FR', 'Bonjour');
    greets.set('SP', 'Buenas Dias');

    const [greeting, setGreeting] = useState('');
    const changeGreeting = (e)=>{
        setGreeting(greets.get(e.target.value))
    }
    // const greeting = greets.get(props.language);

    return(
        <div>
            <select onChange={changeGreeting}>
                <option value=''>--Select a Language--</option>
                <option value='EN'>English</option>
                <option value='FR'>French</option>
                <option value='SP'>Spanish</option>
            </select>
            <h1>{greeting}</h1>
        </div>
    )
}

export default Greet;
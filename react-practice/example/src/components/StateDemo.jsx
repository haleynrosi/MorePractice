import {useState} from 'react';

const StateDemo = ()=>{
    const [names,setNames] = useState(['John','James','Michael']);
    //let name = "John";
    // let greet = "Morning";
    // const[name,setName] = useState('John');
    // const[greet,setGreeting] = useState('Morning')
    // const[greeting,setGreeting] = useState(['John','Morning'])

    const changeName=()=>{
        // name = "James";
        // greet = "Afternoon"
        // setName('James');
        // setGreeting('Afternoon');
        // setGreeting(['James','Afternoon'])
        setNames(['Sara','Kelly'])
    }

    return (
        <div>
            <h2>Welcome to Digitalcrafts</h2>
            {
                names.map((name)=>(
                    <h2>{name}</h2>
                ))
            }
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default StateDemo;
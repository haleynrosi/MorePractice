import {useState} from "react";

const StateExample = ()=>{
    const fruits = ['Mango','Orange','Guava','Banana'];
    const [fruit,setFruit] = useState(fruits[0]);
    const [index,setIndex] = useState(0);

    const showNextFruit = ()=>{
        setIndex(index+1);
        console.log("next"+index)
        setFruit(fruits[index]);
    }

    const showPrevFruit = ()=>{
        setIndex(index-1);
        console.log("previous"+index)
        setFruit(fruits[index]);
    }

    return (
        <div>
            <button onClick={showPrevFruit}>Prev Fruit</button>
            Fruit name : {fruit}
            <button onClick={showNextFruit}>Next Fruit</button>
        </div>
    )   
}

export default StateExample;
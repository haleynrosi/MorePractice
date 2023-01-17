const http = require('http'); //require is set up to require specific things in node
const express = require('express');
const app = express();
// app.use(express.json());

const categoryList = [
    {
        "name": "Groceries",
        "description": "This is a list of the groceries I bought",
        "icon": "eggplant-icon"

    },
    {
        "name": "TjMaxx shopping",
        "description": "This is a list of what I bought at TJMaxx",
        "icon": "dancing-red-dress-icon"
    }
]

const expenseList = [
    {
        "category": "Groceries",
        "note": "This is a list of the groceries I bought",
        "date": "1/16/2023",
        "amount": "122.23",

    },
    {
        "category": "TJMaxx shopping",
        "note": "This is a list of what I bought at TJMaxx",
        "date": "1/16/2023",
        "amount": "56.78",
    }
]

app.get('/categories', (req, res) => {
    res.send("Response sended!")
})

app.post('/categories', (req, res)=> {
    res.send("posted!")
})

app.listen(3000, ()=>{

})
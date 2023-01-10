const axios = require('axios'); //another way to install axios and call api with it

function callApi(){
    axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response=>{
        console.log(response.data);
    })
}

callApi();

function callApiPost(){
    axios.post('https://api.thecatapi.com/v1/breeds')
    .then(response=>{
        console.log(response.data);
    })
}

callApi();
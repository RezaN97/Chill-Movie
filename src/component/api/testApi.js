const axios = require('axios')

//Make a request
axios.get('/user?ID=12345')
    .then(function(response){
        //test 
    console.log(response)
    })
    .catch(function(error){
    //handle error
    console.log(error)
    })
    .finally(function () {
        //always ececute
    })
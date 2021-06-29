

const fs = require('fs');
const path = require('path')


async function getDataFromDb(){

    fs.readFile(path.resolve('./src/db/dogs.txt'), (error, data)=>{

        console.log(__dirname)
        if(error){
            console.log(error)
            return error;
        }
        else{

            return data
        }
    })

}


module.exports = getDataFromDb
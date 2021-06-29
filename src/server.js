const getDataFromDB = require('./services/getDataFromDB.js')


const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.get('/', ((req, res) => {
    console.log('sending dogs')

    fs.readFile('./src/db/dogs.json', (error, data)=>{
        if(error){
            console.log(error)
        }
        else{
            const dataToSend = JSON.parse(data.toString());
            res.json(dataToSend.dogs);
            res.end();
        }
    })
}))

app.get('/owner/:id', ((req, res) => {

    fs.readFile('./src/db/dogs.json', (error, data)=>{
        if(error){
            console.log(error)
        }
        else{
            const object = JSON.parse(data.toString());
            const dogs = (object.dogs);
            // console.log(dogs)
            const result = []
            dogs.forEach((element)=>{
                if(element.owner.includes('ana')){
                    result.push(element)
                }
            })
            console.log(result);

        }
    })
}))

app.post('/update', ((req, res) => {
    console.log(req.body);
    res.end()
}))


app.listen(process.env.PORT);
console.log('listening on ', process.env.PORT)
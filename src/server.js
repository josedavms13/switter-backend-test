const getDataFromDB = require('./services/getDataFromDB.js');
const updateDb = require('./services/updateDB.js');
const checkIfSameDay = require('./utilities/checkIfSameDay.js');
const saveChangesInDB = require('./services/saveChangesInDB')
const resetDogState = require('./utilities/resetDogsState.js')

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


let DOGS_OBJECT;
let IS_SAME_DAY = false;

let NEW_OBJECT;

//region Initial Settings
fs.readFile('./src/db/dogs.json', (error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        DOGS_OBJECT = JSON.parse(data.toString());
        console.log('Loaded from db')

        console.log('is the same day ' , checkIfSameDay(DOGS_OBJECT.date));
        if(checkIfSameDay(DOGS_OBJECT.date)){

            // IS_SAME_DAY = true;
        }
        if(!IS_SAME_DAY){
            DOGS_OBJECT = resetDogState(DOGS_OBJECT);
        }

        console.log(IS_SAME_DAY);



    }
})

//endregion Initial Settings

//region GET CHIA DOGS
app.get('/', ((req, res) => {
    console.log('sending dogs')

    fs.readFile('./src/db/dogs.json', (error, data)=>{
        if(error){
            console.log(error)
        }
        else{
            res.json(DOGS_OBJECT.dogs);
            res.end();
        }
    })
}))

//endregion GET CHIA DOGS

//region Get dogs by param
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
//endregion Get dogs by param

//region Updates changes made by client
app.post('/update', ((req, res) => {
    const changes = req.body;
    console.log(changes);
    NEW_OBJECT = updateDb(DOGS_OBJECT, changes, IS_SAME_DAY);
    res.status(201)
    res.end()
    saveChangesInDB(NEW_OBJECT);
    IS_SAME_DAY = true;
}))

//endregion Updates changes made by client


// Save Session

app.get('/log-out', (((req, res) => {
    console.log('log-out');

    res.status(200);
    res.end();
})))

app.listen(process.env.PORT);
console.log('listening on ', process.env.PORT)
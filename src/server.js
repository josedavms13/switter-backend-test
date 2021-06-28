import express, {json} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import fs from 'fs'
import path from 'path'

dotenv.config();

const app = express();

const data = fs.readFile(path.resolve('./src/db/db.txt') , (error, data)=>{
    if(error){
        console.log(error)
    }else{
        return data.toString();
    }
})


app.get((req, res)=>{
    console.log('get recieved')
    console.log(req);

    res.send('hello')
    console.log(data);


})










app.listen(process.env.PORT);
console.log('listening on port ', process.env.PORT)
import express, {json} from 'express'
import mongoose from 'mongoose'

const app = express();

app.set('name', 'Switter backend prototype');
app.set('port', process.env.port || 4550 )

app.use( express.json() )

const dogsObject = {
    dogs : [{
        id: 0,
        name: 'Donatella',
        owner: 'Ana Maria Piñeros',
        state : 0,
        recreations : {
            price : 50000,
            daysAmount : 0,
            dates: [],
        },
        training : {
            price : 50000,
            daysAmount : 0,
            dates: [],
        },
        kindergarten : {
            isIn : false,
            price : 50000,
            daysAmount : 0,
            dates: [],
        },
        extraItems : []
    },
        {
            id: 1,
            name: 'Malibu',
            owner: 'Ana Maria Piñeros',
            state : 0,
            numOfRecreations : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            training : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            kindergarten : {
                isIn : false,
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            addedItems : []
        },
        {
            id: 2,
            name: 'Bruno',
            owner: 'Juan Felipe',
            state : 0,
            recreations : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            training : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            kindergarten : {
                isIn : false,
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            addedItems : []
        },
        {
            id: 3,
            name: 'Abby',
            owner: 'Juan Felipe',
            state : 0,
            recreations : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            training : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            kindergarten : {
                isIn : false,
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            addedItems : []
        },
        {
            id: 4,
            name: 'Kayser',
            owner: 'Juan Felipe',
            state : 0,
            recreations : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            training : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            kindergarten : {
                isIn : false,
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            addedItems : []
        },
        {
            id: 5,
            name: 'Sacha',
            owner: 'Juan Felipe',
            state : 0,
            recreations : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            training : {
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            kindergarten : {
                isIn : false,
                price : 50000,
                daysAmount : 0,
                dates: [],
            },
            addedItems : []
        }]
}

app.get('/', ((req, res) => {
    res.send('hello world');
}))

app.get('/dogs' , (req, res)=>{

    res.json(dogsObject);
})


app.put('/dogs/:id' , ((req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    console.log(Array.isArray(dogsObject.dogs))
    const indexOfElement = dogsObject.dogs.findIndex(element => element.id === Number(id))

    dogsObject.dogs[indexOfElement].kindergarten.isIn = req.body.isIn;
    dogsObject.dogs[indexOfElement].addedItems.push(req.body.additionals);

    console.log(dogsObject);


    res.json(dogsObject);
}))


app.listen(app.get('port'),()=>{
    console.log('started');
})
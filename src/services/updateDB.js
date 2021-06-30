const fs = require('fs');
const addInfoDependingOnMode = require('../utilities/addInfoDependingOnMode.js');

function updateDB(data, changes, isSameDay){

    // console.log('data', data)
    const date = new Date().toDateString();
    const dogsArray = data.dogs;

    console.log('--------------------------------------------------->')
    console.log('from update');

    console.log(changes);



    // Updates every change made by user and creates a new Object that is pushed to the array
    changes.forEach((change)=>{
                               // Returns object to be pushed
        dogsArray[change.id] = addInfoDependingOnMode(dogsArray[change.id], change.state, isSameDay);
    })



    console.log('********************dogsArray********************')
    console.log(dogsArray)

    return {
        date : date,
        dogs : dogsArray
    }
}
module.exports = updateDB
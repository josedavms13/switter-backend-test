const fs = require('fs');
const addInfoDependingOnMode = require('../utilities/addInfoDependingOnMode.js');

function updateDB(original, changes){

    console.log('--------------------------------------------------->')
    console.log('from update');

    console.log(changes);

    changes.forEach((element)=>{
        // console.log('will change');
        // console.log(original[element.id]);
        addInfoDependingOnMode(original[element.id], element.state);
    })

}
module.exports = updateDB
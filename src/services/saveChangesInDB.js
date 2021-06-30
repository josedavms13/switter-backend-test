const fs = require('fs');

function saveChangesInDB(newObject) {



    fs.writeFile('./src/db/dogs.json', JSON.stringify(newObject), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Saving success!')
        }
    })
}

module.exports = saveChangesInDB